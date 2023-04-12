import Cookies from 'js-cookie'
import { REFRESH_TOKEN_COOKIE_NAME } from '../constants'

export const removeRefreshTokenFromCookies = () => {
    Cookies.remove(REFRESH_TOKEN_COOKIE_NAME)
}
