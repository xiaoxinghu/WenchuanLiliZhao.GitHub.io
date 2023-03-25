import { STUDIO_NAME } from '../../../utils/config'
import Link from '../../link'
import styles from './style.module.scss'

const linkList = [
  { text: 'App', href: '#' },
  { text: 'Manual', href: '#' },
  { text: 'Pricing', href: '#' },
  { text: 'Blog', href: '#' },
  { text: 'About', href: '#' },
]

const linkList2 = [
  { text: 'Terms & Policies', href: '#' },
  { text: 'Contact Us', href: '#' },
  { text: 'Work with Us', href: '#' },
]

type Props = {
  elTitle?: 'footer',
}

function Footer({
  elTitle = 'footer'
}: Props) {
  return (
    <footer className={`
      ${styles[elTitle]}
    `}>
      <header>
        <div className={styles.nyCatIcon}></div>
        <p className={styles.brief}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ul className={styles.linkList}>
          {Object.entries(linkList).map(([header, link]) =>
            <li key={`section-${header}`}>
              <Link href={link.href}>
                <p className="textLink">{link.text}</p>
              </Link>
            </li>
          )}
        </ul>
      </header>
      <footer>
      {/* ⚠️ 这个结构需要重新设计，我暂时先注释掉它 */}
        {/* <div className={styles.upper}>
          <ul className={styles.linkList}>
            {Object.entries(linkList2).map(([header, link]) =>
              <li key={`section-${header}`}>
                <Link href={link.href}>
                  <small className="textLink">{link.text}</small>
                </Link>
              </li>
            )}
          </ul>
          {
            // temporarily disable the link
            false && <div className={`${styles.downloadLink}`}>
              <Link href='/'>
                <small className='textLink'><span></span>Download Teapodo</small>
              </Link>
            </div>
          }
        </div> */}
        <div className={styles.lower}>
          <small className={styles.copyright}>©2022 {STUDIO_NAME}. All rights reserved.</small>
        </div>
      </footer>
    </footer>
  )
}

export default Footer
