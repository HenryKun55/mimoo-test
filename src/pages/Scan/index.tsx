import React, { useState, useEffect, useRef, RefObject } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'
import Quagga from 'quagga'

import { colors } from '../../styles'
import * as ProductActions from '../../store/ducks/products/actions'
import { ApplicationState } from '../../store'
import {
  Container,
  Header,
  Footer,
  Title,
  ConfirmButton,
  BarcodeReader,
  CodeContainer,
  TitleBarCode
} from './styles'

// import './drawingBuffer.css'

const Scan: React.FC = () => {
  const barcodeReaderRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [barcode, setBarcode] = useState('')

  const { product, loading } = useSelector((state: ApplicationState) => state.products)

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }
    const canvas: HTMLCanvasElement = canvasRef.current
    draw(canvas)
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
          // width: '5%',
          // height: '100%',
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
    // Quagga.onProcessed(handleBarcodeProcessed)
  }

  function handleBarcodeDetected(result) {
    console.log(result)
    setBarcode(result.codeResult.code)
  }

  function draw(canvas: HTMLCanvasElement) {
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
        <TitleBarCode>Escaneando o código <br /> de barras</TitleBarCode>
        <canvas ref={canvasRef} id='meu-canvas'/>
      </BarcodeReader>
      {/* <CodeContainer>

      </CodeContainer> */}
      <Footer>
        <ConfirmButton variant="secondary" onClick={handleConfirm}>Confirmar</ConfirmButton>
      </Footer>
    </Container>
  )
}

export default Scan
