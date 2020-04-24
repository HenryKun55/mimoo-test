import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { TiStarFullOutline, TiPlus } from 'react-icons/ti'

import User from '../../types/User'
import { colors } from '../../styles'
import { getName } from '../../storage/UserSettings'
import { IGetProducts } from '../../services/product.service'
import { ApplicationState } from '../../store'
import { getProductsRequest } from '../../store/ducks/products/actions'

import {
  Container,
  ContainerPoints,
  Title,
  Subtitle,
  TextPoint,
  TextPointValue,
  PlusButton,
  Tab,
  ListBrands
} from './styles'

const Home: React.FC = () => {
  const [user, setUser] = useState<User>({ name: '', points: 100 })
  const history = useHistory()
  
  const dispatch = useDispatch()
  const tabs = useSelector(getTabsFromReduxState)
  const points = useSelector(getPoints)

  useEffect(() => {
    (async () => {
      const name = await getName()
      setUser({
        name: name !== null ? name : '',
        points
      })
      
      dispatch(getProductsRequest())
    })()
  }, [])

  function getPoints({ auth }: ApplicationState) {
    return auth.data.points
  }

  function getTabsFromReduxState(state: ApplicationState) {
    return state.products.data.map((item: IGetProducts) => ({
      label: item.category,
      render: () => (
        <ListBrands
          data={item.brands}
          background={item.category === 'Snacks' ? colors.casper : colors.clamShell}
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

  return (
    <>
      <Container>
        <Title>Olá {formattedName(user.name.trim().split(' ')[0])}!</Title>
        <Subtitle>Adicione mais produtos à sua lista</Subtitle>
        <Subtitle>e ganhe pontos!</Subtitle>
        <ContainerPoints>
          <TiStarFullOutline color={colors.brown} size={18}/>
          <TextPoint>Pontos</TextPoint>
        </ContainerPoints>
        <TextPointValue>{user.points}</TextPointValue>
      </Container>

      <Tab tabs={tabs} />

      <PlusButton onClick={handlePlus}>
        <TiPlus color={colors.secondary} size={45}/>
      </PlusButton>
    </>
  )
}

export default Home
