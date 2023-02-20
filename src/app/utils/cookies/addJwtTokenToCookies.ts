import Cookies from 'js-cookie'
import { AUTH_TOKEN_COOKIE_NAME } from '../constants'

export const addJwtTokenToCookies = (jwtToken: string) => {
    Cookies.set(AUTH_TOKEN_COOKIE_NAME, jwtToken)
}
