import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Layout from '../../components/layout'
import { listPosts } from '../../utils/posts'
import { Post } from '../../utils/types'
import styles from './style.module.scss'

type StaticProps = {
  all: Post[]
  path: string
}

const ManualIndexPage: NextPage<StaticProps> = ({ all }) => {
  return (
    <Layout>
      <div className='container'>
        <ul className={styles['article-list']}>
          {all.map(post => (
            <li key={`post-${post.slug}`} className={styles['article-item']}>
              <Link href={`/learn/${post.slug}`} passHref>
                <a>
                  <h2>{post.title}</h2>
                  <p className='text-slate-400'>{post.summary}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const posts = await listPosts()
  /* const components = await Promise.all(files.map(async file => {
*   return await import(file)
* }))
 */

  return {
    props: {
      all: posts,
      path: process.cwd()
    }
  }
}

export default ManualIndexPage
