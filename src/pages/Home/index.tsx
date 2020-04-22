import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { TiStarFullOutline, TiPlus } from 'react-icons/ti'

import { ApplicationState } from '../../store'
import { colors } from '../../styles'
import { getName } from '../../storage/UserSettings'

import { getProductsRequest } from '../../store/ducks/products/actions'
import { ListBrands } from '../../components'
import {
  Container,
  ContainerPoints,
  Title,
  Subtitle,
  TextPoint,
  TextPointValue,
  PlusButton,
  Tab,
} from './styles'
import { IGetProducts } from '../../services/product.service'

const Home: React.FC = () => {
  const [usename, setUsername] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const tabs = useSelector(getTabsFromReduxState)

  useEffect(() => {
    (async () => {
      const name = await getName()
      setUsername(name !== null ? name : '')
      
      dispatch(getProductsRequest())
    })()
  }, [])

  function getTabsFromReduxState(state: ApplicationState) {
    return state.products.data.map((item: IGetProducts) => ({
      label: item.category,
      render: () => (
        <ListBrands
          data={item.brands}
          background={item.category === 'Snacks' ? colors.naoecordepele : colors.cordepele}
        />
      ),
    }))
  }

  function formattedName(value: string) {
    return (value.length < 12) ? value : `${value.substr(0, 12)}...`
  }

  function handlePlus() {
    history.push('/scan')
  }

  function handleTabChange(index: number) {
    console.log('Tab index:', index)
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

      <Tab tabs={tabs} onChange={handleTabChange}/>

      <PlusButton onClick={handlePlus}>
        <TiPlus color='white' size={45}/>
      </PlusButton>
    </>
  )
}

export default Home
