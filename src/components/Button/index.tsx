import React from 'react'

import { Container, Text } from './styles'

type Variant = 'primary' | 'secondary'

export interface Props {
  variant?: Variant;
}

const Button: React.FC<Props & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  variant = 'primary',
  children,
  ...props
}) => {
  return (
    <Container variant={variant} {...props}>
      <Text variant={variant}>{children}</Text>
    </Container>
  )
}

export default Button
