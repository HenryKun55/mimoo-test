import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import * as AuthActions from '../../store/ducks/auth/actions';
import * as ProductActions from '../../store/ducks/products/actions';

import {
  Container,
  Logo,
  Title,
  Subtitle,
  Description,
  Image,
  StartButton,
} from './styles'

import { ApplicationState } from '../../store';

const Splash: React.FC = () => {
  const dispatch = useDispatch()
  const { products: { product } } = useSelector((state: ApplicationState) => state)
  
  const handleClick = () => {
    // dispatch(AuthActions.storeRequest({ name: 'Alfredinho Rosa' }))
    dispatch(ProductActions.getProductRequest('Sopa'))
  }

  return (
    <Container>
      <Title>Bem vindo à Mimmo</Title>
      <Subtitle>Alegre. Divertido. Relevante. Você vai adorar {product?.name}!</Subtitle>
      <Description>Nos conte um pouco sobre você e ganhe pontos</Description>
      <StartButton onClick={handleClick}>Começar</StartButton>
    </Container>
  )
}

export default Splash
