import styles from './home-page.scss'
import { LoginWithGoogle } from '../../containers/login-with-google/LoginWithGoogle'

const HomePage = () => {
    return (
        <div className={styles.loginPage}>
            <div className={`${styles.light} ${styles.x1}`}></div>
            <div className={`${styles.light} ${styles.x2}`}></div>
            <div className={`${styles.light} ${styles.x3}`}></div>
            <div className={`${styles.light} ${styles.x4}`}></div>
            <div className={`${styles.light} ${styles.x5}`}></div>
            <div className={`${styles.light} ${styles.x6}`}></div>
            <div className={`${styles.light} ${styles.x7}`}></div>
            <div className={`${styles.light} ${styles.x8}`}></div>
            <div className={`${styles.light} ${styles.x9}`}></div>
            <LoginWithGoogle />
        </div>
    )
}

export default HomePage
