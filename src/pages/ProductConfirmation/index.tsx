import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
  Container,
  Title,
  ProductName,
  ProductImage,
  CongratulationsText,
  ContinueText,
} from './styles'

import * as ProductActions from '../../store/ducks/products/actions'

const ProductConfirmation: React.FC = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ProductActions.cleanProduct())
  }, [])

  return (
    <Container>
      <Title>ProductConfirmation</Title>
      <ProductName>ProductConfirmation</ProductName>
      <ProductImage />
      <CongratulationsText></CongratulationsText>
      <ContinueText></ContinueText>
    </Container>
  )
}

export default ProductConfirmation
