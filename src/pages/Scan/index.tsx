import React, { useState, useEffect, useRef } from 'react'
import Quagga from 'quagga'
import { useHistory } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'

import { colors } from '../../styles'
import { ApplicationState } from '../../store'
import * as ProductActions from '../../store/ducks/products/actions'
import {
  Container,
  Header,
  Footer,
  Title,
  ConfirmButton,
  BarcodeReader,
  CodeContainer,
  TitleBarCode,
  CanvasContainer,
  Canvas,
  CodeResultTitle,
  CodeResult
} from './styles'

const Scan: React.FC = () => {
  const [barcode, setBarcode] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const barcodeReaderRef = useRef<HTMLDivElement>(null)

  const history = useHistory()
  const dispatch = useDispatch()
  const { product, loading } = useSelector((state: ApplicationState) => state.products)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas: HTMLCanvasElement = canvasRef.current
    drawRectangleCamera(canvas)
  }, [canvasRef.current])

  useEffect(() => {
    if(product) {
      history.push('/product/confirmation')
    }
  }, [loading, product])

  useEffect(() => {
    if (barcodeReaderRef.current !== null) {
      initQuagga()
    }
  }, [barcodeReaderRef.current])

  function initQuagga() {
    Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: barcodeReaderRef.current,
        constraints: {
          facingMode: "environment",
        },
      },
      decoder : {
        readers : ["ean_reader"],
      }
    }, handleBarcodeReaderInit)
  }

  function handleBarcodeReaderInit(err) {
    if (err) return

    Quagga.start()
    Quagga.onDetected(handleBarcodeDetected)
  }

  function handleBarcodeDetected(result) {
    console.log('Barcode Result =>', result)
    setBarcode(result.codeResult.code)
  }

  function drawRectangleCamera(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d")

    if(ctx) {
      ctx.beginPath()

      ctx.moveTo(0, 0)
      ctx.lineTo(ctx.canvas.width, 0)
      ctx.lineTo(ctx.canvas.width, ctx.canvas.width)
      ctx.lineTo(0, ctx.canvas.width)
      ctx.lineTo(0, 0)
      ctx.closePath()
  
      const horizontalSize = ctx.canvas.width * 0.1
      const verticalSize = ctx.canvas.height * 0.4

      const width = ctx.canvas.width * 0.9
      const height = ctx.canvas.height * 0.7

      ctx.moveTo(horizontalSize, verticalSize)
      ctx.lineTo(horizontalSize, height)
      ctx.lineTo(width, height)
      ctx.lineTo(width, verticalSize)

      ctx.closePath()
  
      ctx.fillStyle = "rgba(0,0,0,.5)"
      ctx.lineWidth = 1
      ctx.fill()
      ctx.stroke()
    }
  }

  function handleBack() {
    history.goBack()
  }

  function handleConfirm() {
    if(barcode.length > 0) {
      dispatch(ProductActions.getProductRequest(barcode))
    }
  }

  return (
    <Container>
      <Header>
      <IoMdArrowRoundBack color={colors.primary} size={30} onClick={handleBack}/>
        <Title>Escanear Produto</Title>
      </Header>

      <BarcodeReader ref={barcodeReaderRef}>
        <CanvasContainer>
          <TitleBarCode>Escaneando o código <br /> de barras</TitleBarCode>
          <Canvas ref={canvasRef} id='meu-canvas'/>
          <CodeContainer>
            <CodeResultTitle>Número do código de Barras:</CodeResultTitle>
            <CodeResult>{barcode || `00000000000`}</CodeResult>
          </CodeContainer>
        </CanvasContainer> 
      </BarcodeReader>

      <Footer>
        <ConfirmButton variant="secondary" onClick={handleConfirm}>Confirmar</ConfirmButton>
      </Footer>
    </Container>
  )
}

export default Scan
