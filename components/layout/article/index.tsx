import { ReactNode } from 'react'
import Layout from '../'
import styles from './style.module.scss'

type Props = {
  metadata: {
    title: string
  }
  children: ReactNode
}

function Article ({ metadata, children }: Props) {

  return (
    <Layout>
      <article className={styles.container}>
        <h1>{metadata.title}</h1>
        {children}
      </article>
    </Layout>
  )
}

export default Article
