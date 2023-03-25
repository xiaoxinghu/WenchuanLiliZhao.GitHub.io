import { ReactNode } from 'react'
import styles from './style.module.scss'

type Props = {
  children?: ReactNode,
  activated?: boolean,
}

function ChapterMark({
  children = 'I am a chapter mark',
  activated = false,
}: Props) {
  return (
    <div className={[
      styles.container,
      activated ? styles.activated : styles.normal,
    ].join(' ')}>
      <div className={styles.flag}>
        <div className={styles.textContainer}>
          <div className={styles.flagStatue}></div>
          {children}
        </div>
        <div className={styles.corner}>
          <div className={styles.cornerBg}></div>
          <div className={styles.cornerBorder}></div>
          <div className={styles.cornerStatue}></div>
        </div>
      </div>
      <div className={styles.pointer}></div>
    </div>
  )
}

export default ChapterMark
