import { ElementType, ReactNode } from "react"
import Box, { BoxProps } from "../box"
import styles from './style.module.scss'


type Props = {
  as?: ElementType,
  children?: ReactNode,
} & BoxProps

function LonelyTitle({
  as: Component = 'h1',
  children = 'children',
  ...rest
}: Props) {
  return (
    <Box as={Component} className={`
      ${styles.container}
    `} {...rest}>
      {children}
    </Box>
  )
}

export default LonelyTitle
