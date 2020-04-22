import React from 'react'

import { Container, Text } from './styles'

export interface ButtonProps {
  /**
   * Set this to change colors of background and font
   * @default primary
   */
  variant?: 'primary' | 'secondary';
}

const Button: React.SFC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
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
