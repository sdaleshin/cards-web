import { useSelector } from 'react-redux'
import { selectUserInfo } from '../../redux/auth/auth.slice'
import { Header } from '../../components/header/Header'

export const HeaderContainer = () => {
    const { name, email } = useSelector(selectUserInfo)
    return <Header email={email} name={name} />
}
