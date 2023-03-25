import { ReactNode } from 'react'
import styles from './style.module.scss'

type Props = {
  children?: ReactNode,
  size?:
    'normal' |
    'heroic',
}


function Content ({
  children = 'shit',
  size = 'normal',
}: Props) {
  return (
    <div className={`
      ${styles[size]}
    `}
    >
      { children }
    </div>
  )
}

export default Content

