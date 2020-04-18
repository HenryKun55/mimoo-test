import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.button`
  background-color: ${({ variant }: { variant: string }) => variant === 'primary' ? colors.primary : colors.secondary};
  border-style: none;
  padding: 12px 20px;
`

export const Text = styled.span`
  color: ${({ variant }: { variant: string }) => variant === 'primary' ? colors.secondary : colors.primary};
  font-size: 20px;
  font-weight: bold;
`
