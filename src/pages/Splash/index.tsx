import React from 'react'
import { useHistory } from 'react-router-dom'

import { logo, splash } from '../../assets'
import {
  Container,
  Header,
  Logo,
  Title,
  Subtitle,
  Description,
  Image,
  StartButton,
} from './styles'

const Splash: React.FC = () => {
  const history = useHistory()

  function handleStart() {
    history.push('/login')
  }

  return (
    <Container>
      <Logo src={logo} />

      <Header>
        <Title>Bem vindo à <br />Mimmo!</Title>
        <Subtitle>Alegre. Divertido. Relevante. <br />Você vai adorar.</Subtitle>
        <Description>Nos conte um pouco sobre <br />você e ganhe pontos</Description>
      </Header>

      <Image src={splash} alt='Splash'/>
      
      <StartButton onClick={handleStart}>Começar</StartButton>
    </Container>
  )
}

export default Splash
