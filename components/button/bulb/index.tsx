/**
 * TODO: delete this, this should be with the Gallery
 */
import { ReactNode } from "react"
import styles from './style.module.scss'

type Props = {
  elTitle?:
    'bulb',
  statue?:
    'normal' |
    'activated',
}

function Bulb({
  elTitle = 'bulb',
  statue = 'normal'
}: Props) {
  return (
    <div className={`
      ${styles[elTitle]}
      ${styles[statue]}
    `}>
      <div className={styles.notch}></div>
      <div className={styles.light1}></div>
      <div className={styles.light2}></div>
      <div className={styles.bg}></div>
      <div className={styles.bgShadow}></div>
      <div className={styles.roof}>
        <div className={styles.roofBorder}></div>
        <div className={styles.roofStatue}></div>
      </div>
    </div>
  )
}

export default Bulb
