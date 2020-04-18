import styled from 'styled-components'
import { colors } from '../../styles'
import { Button } from '../../components'

export const Container = styled.div`
  padding: 30px;
`

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid ${colors.primary};
  margin-top: 30px;
  width: 100%;
  padding: 10px 0;
  font-size: 22px;
  color: ${colors.grey};

  &:focus {
    outline: none;
  }
`

export const Title = styled.h1`
  margin-top: 40px;
  font-size: 30px;
  color: ${colors.grey};
`

export const ContinueButton = styled(Button)`
  position: fixed;
  bottom: 0px;
  width: 100%;
`