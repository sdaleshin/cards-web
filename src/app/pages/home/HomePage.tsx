import styles from './home-page.scss'
import { useSelector } from 'react-redux'
import { selectLoggedIn } from '../../redux/auth/auth.slice'
import { LoginWithGoogle } from '../../containers/login-with-google/LoginWithGoogle'

const HomePage = () => {
    const loggedIn = useSelector(selectLoggedIn)
    return loggedIn ? (
        <div className={styles.home}>Авторизован</div>
    ) : (
        <div className={styles.home}>
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
