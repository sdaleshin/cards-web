import Cookies from 'js-cookie'
import { AUTH_TOKEN_COOKIE_NAME } from '../constants'

export const removeJwtTokenToCookies = () => {
    Cookies.remove(AUTH_TOKEN_COOKIE_NAME)
}
