import { ReactNode } from 'react'
import Video from '../../video'
import Footer from '../footer'
import Nav from '../nav'
import styles from './style.module.scss'

type Props = {
  children: ReactNode
  title: string
  video?: string
}

function ManualLayout(props: Props) {
  const { title, video, children } = props

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Nav/>
      </div>
      <aside className={styles.toc}>
        <div className='p-2 bg-blue-900 text-white'>
          <h1 className='uppercase text-3xl'>Manual</h1>
        </div>
        <ul className='p-2'>
          <li>This is the sidebar</li>
          <li>probabbly table of content</li>
          <li>not implemented yet</li>
        </ul>
      </aside>
      <div className={styles.content}>
        <main className='container p-3'>
          {video && <Video id={video} />}
          <h1 className='bg-slate-200 p-2 border rounded border-black font-bold'>{title}</h1>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default ManualLayout
