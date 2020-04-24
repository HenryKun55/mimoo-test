import styled from 'styled-components'
import { FiMapPin } from 'react-icons/fi'
import { colors } from '../../styles'

export const Container = styled.div`
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`

export const Icon = styled(FiMapPin)``

export const Title = styled.span`
  color: ${colors.greyLight2};
  margin-left: 5px;
  font-size: 12px;
`

export const BrandContainer = styled.div``

export const ProductContainer = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); */
  margin-bottom: 10px;
`

export const Image = styled.img`
  width: 130px;
  height: 145px;
  border-radius: 10px;
  object-fit: contain;
  object-position: bottom center;
  background-color: ${({ background }: { background?: string }) => background || 'none'};
  box-shadow: 0px 0px 4px #00000029;
  margin-bottom: 10px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`

