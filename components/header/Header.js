import styles from './header.module.scss'

export default function Index({ setOpened }) {
  return (
    <header className={`container ${styles.root}`}>
      <a onClick={() => { setOpened(true) }}> Sign in </a>
      <a onClick={() => { setOpened(true) }}> Create account </a>
    </header>
  )
}