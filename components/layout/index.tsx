import { ReactNode } from "react"
import Box from "../box"
import Footer from './footer'
import Nav from "./nav"
import styles from './style.module.scss'

function Layout({ children }: { children: ReactNode }) {

  return (
    <>
      <Nav/>
      <main css={{ width: '100%' }} className={styles.content}>
        {children}
      </main>
      <Box as='footer' centered>
        <Footer></Footer>
      </Box>
    </>
  )
}

export default Layout
