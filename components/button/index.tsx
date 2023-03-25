import { ComponentPropsWithRef, ElementType } from 'react'
import { BoxProps } from '../box'
import LushuButton from './variants/lushu'
import LiliButton from './variants/lili'

type ButtonVariant = 'lushu' | 'lili'

export interface ButtonProps extends ComponentPropsWithRef<'button'> {}

type Props =
  ComponentPropsWithRef<'button'> &
  Omit<BoxProps, 'as' | 'centered'> & {
    variant?: ButtonVariant
  }

const StyledButtons: Record<ButtonVariant, ElementType<ButtonProps>> = {
  lushu: LushuButton,
  lili: LiliButton,
}

function Button({ variant = 'lushu', className, children, ...props }: Props) {
  const StyledButton = StyledButtons[variant]
  return (
    <StyledButton {...props}>{children}</StyledButton>
  )
}

export default Button
