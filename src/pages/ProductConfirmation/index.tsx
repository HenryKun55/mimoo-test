import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Container,
  Header,
  Center,
  Footer,
  Title,
  Image,
  ProductName,
  ContinueText,
  CongratulationsText,
  ContainerButton,
  ContinueButton
} from './styles'

import * as ProductActions from '../../store/ducks/products/actions'
import { IGetProduct } from '../../services/product.service'
import { ApplicationState } from '../../store'
import { useHistory } from 'react-router-dom'

const ProductConfirmation: React.FC = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const { product } = useSelector((state: ApplicationState) => state.products)

  function handleContinue() {
    dispatch(ProductActions.setProductRequest(product))
    history.push('/home')
  }

  return (
    <Container>
      <Header>
        <Title>Identificamos <br /> que você consome</Title>
        <ProductName>{product?.name}</ProductName>
      </Header>
      <Center>
        <Image src={product?.image}/>
      </Center>
      <Footer>
        <CongratulationsText>Parabéns <br /> Você ganhou 100 pontos!</CongratulationsText>
        <ContinueText>Continue para ganhar ainda <br /> mais pontos</ContinueText>
      </Footer>
      <ContainerButton>
        <ContinueButton variant="secondary" onClick={handleContinue}>Salvar</ContinueButton>
      </ContainerButton>
    </Container>
  )
}

export default ProductConfirmation
