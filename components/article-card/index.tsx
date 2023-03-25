import { ReactNode } from "react"
import styles from './style.module.scss'


type Props = {
  cover?: ReactNode,
  title?: ReactNode,
  brief?: ReactNode,
  elTitle?: 'articleCard',
}

function ArticleCard({
  cover = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/La_Boh%C3%A9mienne_endormie.jpg/640px-La_Boh%C3%A9mienne_endormie.jpg',
  title = 'Title goes here',
  brief = 'Praesent ultricies nisl nisi, at posuere lectus auctor eget',
  elTitle = 'articleCard',
}: Props) {
  return (
    <figure
      className={`
        ${styles[elTitle]}
      `}
    >
      <div className={styles.imageFrame}>
        <img className={styles.cover} src={`${[cover]}`} alt="" />
        <div className={styles.border}></div>
      </div>

      <figcaption className={styles.figcaption}>
        <h3>{title}</h3>
        <small>{brief}</small>
      </figcaption>

      <div className={styles.border}></div>
      <div className="statue"></div>
    </figure>
  )
}

export default ArticleCard