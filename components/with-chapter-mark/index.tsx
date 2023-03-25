import { ReactNode } from 'react'
import Box from '../box'
import ChapterMark from '../chapter-mark'
import styles from './style.module.scss'

type Props = {
  label: string
  children: ReactNode
}

function WithChapterMark({ label, children }: Props) {
  return (
    <Box className={styles.box} as='section' px={30} css={{
      // maxWidth: 800,
      // paddingTop: 120,
    }} centered>
      <ChapterMark>
        {label}
      </ChapterMark>
      <Box px='20px' css={{
        paddingTop: 24,
        boxShadow: 'inset 1px 0 0 var(--color-w7)'
      }}>
        {children}
        <div className={styles.end}></div>
      </Box>
    </Box>
  )
}

export default WithChapterMark
