import { APP_NAME, STUDIO_NAME } from '../../../utils/config';
import styles from './style.module.scss';

type Props = {
  elTitle?:
    'topNav'
  mode?:
    'forWeb' |
    'forApp',
}

function Nav({
  elTitle = 'topNav',
  mode = 'forWeb',
}: Props) {
  return (
    <nav className={`
      ${styles[elTitle]}
      ${styles[mode]}
    `}>

      <div className={styles.left}>
        <div className={styles.logoTitle}>
          <div className={styles.nyCatLogo}></div>
          <div className={styles.text}>
            <div className={styles.title}>
              {APP_NAME}
            </div>
            <div className={styles.caption}>
              by {STUDIO_NAME}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mid}>
      </div>
      <div className={styles.right}>
      </div>






    </nav>
  )
}

export default Nav
