import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'

import { Container, Title, Input, ContinueButton } from './styles'
import { colors } from '../../styles';

import * as AuthActions from '../../store/ducks/auth/actions'

const Login: React.FC = () => {
  const [name, setName] = useState('')
  const points = 100

  const history = useHistory()
  const dispatch = useDispatch()

  function handleContinue() {
    if (name.length > 0) {
      dispatch(AuthActions.storeRequest({ name, points }))
      history.push('/home')
    }
  }

  function handleBack() {
    history.goBack()
  }

  return (
    <>
      <Container>
        <IoMdArrowRoundBack color={colors.primary} size={30} onClick={handleBack}/>
        <Title>Informe Seu Nome</Title>
        <Input
          name='name'
          placeholder="Digite seu nome"
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </Container>

      <ContinueButton onClick={handleContinue}>Continuar</ContinueButton>
    </>
  )
}

export default Login
