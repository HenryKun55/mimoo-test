import styled from 'styled-components'
import { Button } from '../../components'
import { colors } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Header = styled.div`
  display: flex;
  padding: 20px;
`


export const Title = styled.h1`
  flex: 1;
  text-align: center;
  font-size: 23px;
  color: ${colors.grey};
  font-family: 'Circular Std Book';
  opacity: 0.47;
`

export const Camera = styled.div`
  flex: 1;
  background-color: ${colors.greyLight};
`

export const ConfirmButton = styled(Button)``
