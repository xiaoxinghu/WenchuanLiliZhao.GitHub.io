import { Properties } from 'csstype'
import { ElementType, FC, ReactNode } from 'react'

type StandardProperties = Properties<number | string>

export type BoxProps = {
  children?: ReactNode
  as?: ElementType
  centered?: boolean
  className?: string
  // shorthands
  px?: StandardProperties['paddingLeft']
  py?: StandardProperties['paddingTop']
  bg?: StandardProperties['backgroundColor']
}


const Box: FC<BoxProps> = (props) => {

  const {
    as: Component = 'div',
    px, py, bg, centered,
    ...rest
  } = props

  return (
    <Component css={{
      paddingLeft: px,
      paddingRight: px,
      paddingTop: py,
      paddingBottom: py,
      margin: centered ? '0 auto' : undefined,
      backgroundColor: bg,
    }} {...rest}></Component>
  )
}

export default Box
