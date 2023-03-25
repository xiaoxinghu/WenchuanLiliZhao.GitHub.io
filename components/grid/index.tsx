import * as CSS from 'csstype'
import { ReactNode } from 'react'
import { px } from '../../utils/css'

type Property = string | number

type Props = {
  children: ReactNode
  width?: Property,
  columns?: Property
  gap?: Property
  repeat?: 'fit' | 'fill'
}

function widthToColumns(width: Property, repeat: string) {
  return width ? `repeat(auto-${repeat}, minmax(${px(width)}, 1fr))` : undefined
}

function countToColumns(n: Property | undefined) {
  return n ? (typeof n === 'number' ? `repeat(${n}, 1fr)` : n) : undefined
}

function Grid({ children, width, columns, gap = 3, repeat = 'fit' }: Props) {
  const style: CSS.Properties = {
    display: 'grid',
    gridColumn: columns,
    gap: `${px(gap)}`,
    gridTemplateColumns: !!width ? widthToColumns(width, repeat) : countToColumns(columns)
  }

  return (
    <div style={style}>{children}</div>
  )
}

export default Grid
