import { ButtonProps } from '../'
import styles from './style.module.scss'

function Lushu({ children, className, ...props }: ButtonProps) {
  return (
    <button className={styles.root} {...props}>
      <span className={styles.border}></span>
      <span className={styles.bg}></span>
      <span className={styles.shadow}></span>
      <span className={styles.front}>{children}</span>
    </button>
  )
}

export default Lushu
