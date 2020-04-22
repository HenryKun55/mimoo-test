import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'

import { Container, Header, Title, Camera, ConfirmButton } from './styles'
import { colors } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'

import * as ProductActions from '../../store/ducks/products/actions'
import { ApplicationState } from '../../store'

const Scan: React.FC = () => {

  const [barcode, setBarcode] = useState('0123456789')

  const { product, loading } = useSelector((state: ApplicationState) => state.products)

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if(product) {
      history.push('/product')
    }
  }, [loading, product])

  function handleBack() {
    history.goBack()
  }

  function handleConfirm() {
    if(barcode.length > 9) {
      dispatch(ProductActions.getProductRequest(barcode))
    }
  }

  return (
    <Container>
      <Header>
      <IoMdArrowRoundBack color={colors.primary} size={30} onClick={handleBack}/>
        <Title>Escanear Produto</Title>
      </Header>
      <Camera />

      <ConfirmButton variant="secondary" onClick={handleConfirm}>Confirmar</ConfirmButton>
    </Container>
  )
}

export default Scan
