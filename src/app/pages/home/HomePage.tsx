import styles from './home-page.scss'
import { LoginWithGoogle } from '../../components'
import { useSelector } from 'react-redux'
import { selectLoggedIn } from '../../redux/auth/auth.slice'
import UnderConstruction from '../../components/under-construction/UnderConstruction'

const HomePage = () => {
    const loggedIn = useSelector(selectLoggedIn)
    return (
        <div className={styles.home}>
            Hello
            <UnderConstruction />
        </div>
        // <div
        //     className={styles.test1}
        //     onClick={() => {
        //         alert('asd')
        //     }}
        // >
        //     {loggedIn ? 'Авторизован' : 'Требуется авторизация'}
        //     {/*<LoginWithGoogle />*/}
        // </div>
    )
}

export default HomePage
