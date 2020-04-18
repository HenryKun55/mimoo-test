import styled from 'styled-components'
import { colors } from '../../styles'

import { Button } from '../../components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const Header = styled.header`
  padding: 30px;
`

export const Logo = styled.img`
  width: 150px;
  margin: 30px 20px 0px 20px;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 35px;
  color: ${colors.primary};
  letter-spacing: 0px;
  opacity: 1;
  margin: 0;
  margin-bottom: 20px;
`

export const Subtitle = styled.h2`
  color: ${colors.primary};
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 20px;
`

export const Description = styled.h3`
  font-weight: normal;
`

export const Image = styled.img`
  object-fit: contain;
`

export const StartButton = styled(Button)`
  position: fixed;
  bottom: 0px;
  width: 100%;
`
