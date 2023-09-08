import Cookies from 'js-cookie'
import { REFRESH_TOKEN_COOKIE_NAME } from '../constants'

export const addRefreshTokenToCookies = (refreshToken: string) => {
    Cookies.set(REFRESH_TOKEN_COOKIE_NAME, refreshToken, {
        expires: 365,
    })
}
