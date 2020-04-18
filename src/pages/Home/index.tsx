import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { TiStarFullOutline } from 'react-icons/ti'

import { ApplicationState } from '../../store'
import { colors } from '../../styles'
import { getName } from '../../storage/UserSettings'

import {
  Container,
  ContainerPoints,
  Title,
  Subtitle,
  TextPoint,
  TextPointValue,
  PlusButton,
  ListBrands,
} from './styles'

const Home: React.FC = () => {
  const [usename, setUsername] = useState('')

  useEffect(() => {
    (async () => {
      const name = await getName()
      setUsername(name !== null ? name : '')
    })()
  }, [])

  const { data } = useSelector((state: ApplicationState) => state.auth)

  function formattedName(value: string) {
    return (value.length < 12) ? value : `${value.substr(0, 12)}...`
  }

  function handlePlus() {

  }

  return (
    <>
      <Container>
        <Title>Olá {formattedName(usename.trim().split(' ')[0])}!</Title>
        <Subtitle>Adicione mais produtos à sua lista</Subtitle>
        <Subtitle>e ganhe pontos!</Subtitle>
        <ContainerPoints>
          <TiStarFullOutline color={colors.brown} size={18}/>
          <TextPoint>Pontos</TextPoint>
        </ContainerPoints>
        <TextPointValue>100</TextPointValue>
      </Container>
      <ListBrands />
      <PlusButton color={colors.primary} size={80} onClick={handlePlus}/>
    </>
  )
}

export default Home
