import styled from 'styled-components'
import { colors } from '../../styles'
import { AiFillPlusCircle } from 'react-icons/ai'
import { ListBrands as ListBrandsC } from '../../components'

export const Container = styled.div`
  padding: 30px;
`

export const Title = styled.h1`
  font-size: 34px;
  font-weight: 500;
  color: ${colors.grey};
  margin-bottom: 20px;
`

export const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: normal;
  line-break: 30px;
  color: ${colors.grey};
  margin-bottom: 5px;
`

export const ContainerPoints = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`

export const TextPoint = styled.span`
  font-size: 18px;
  color: ${colors.brown};
  font-weight: 300;
  margin-left: 3px;
`

export const TextPointValue = styled.h3`
  font-size: 25px;
  color: ${colors.brown};
  font-weight: bold;
  margin-top: 10px;
  margin-left: 20px;
`

export const PlusButton = styled(AiFillPlusCircle)`
  position: absolute;
  bottom: 30px;
  right: 30px;
`

export const ListBrands = styled(ListBrandsC)`
  padding: 0 30px;
`
