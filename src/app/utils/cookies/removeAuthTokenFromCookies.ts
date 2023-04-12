import Cookies from 'js-cookie'
import { AUTH_TOKEN_COOKIE_NAME } from '../constants'

export const removeJwtTokenFromCookies = () => {
    Cookies.remove(AUTH_TOKEN_COOKIE_NAME)
}
