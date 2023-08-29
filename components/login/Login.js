import styles from './login.module.scss'




export default function Index({ opened, setOpened }) {

  return (
    <div className={`${styles.popup} ${styles.login}`} onClick={(e) => { e.preventDefault(); if (e.target === e.currentTarget) { setOpened(false) } }} >
      <div className={styles.inner}>
        <a className={styles.xcloser} onClick={() => { setOpened(false) }} />


        {/* item */}
        <div className={`${styles.form_row} ${styles.facebook}`} >
          Continue with Facebook
        </div>

        {/* item */}
        <div className={`${styles.form_row} ${styles.google}`} >
          Continue with Google
        </div>

        {/* item */}
        <div className={`${styles.form_row} ${styles.apple}`} >
          Continue with Apple
        </div>

        <p className={styles.legal}>
          When registering, you agree that we may use your provided data for the registration and to send you notifications on our products and services. You can unsubscribe from notifications at any time in your settings. For additional info please refer to our Privacy Policy.
        </p>


      </div>
    </div>
  )
}