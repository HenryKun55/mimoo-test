import React from 'react'

import { Container } from './styles'
import { useSelector } from 'react-redux'
import { ApplicationState } from '../../store'

import { FaPlusCircle } from 'react-icons/fa'
import { colors } from '../../styles'

const Home: React.FC = () => {

  const { data } = useSelector((state: ApplicationState) => state.auth)

  function formattedName(value: string) {
    return (value.length < 12) ? value : `${value.substr(0, 12)}...`
  }

  return (
    <Container>
      <h1>Olá {formattedName(data.name.trim().split(' ')[0])}!</h1>
      <Title>Olá {formattedName(data.name.trim().split(' ')[0])}!</Title>
      <FaPlusCircle color={colors.primary} size={40} style={{ position: 'absolute', bottom: 30, right: 30 }} />
    </Container>
  )
}

export default Home
