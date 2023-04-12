import Cookies from 'js-cookie'
import { REFRESH_TOKEN_COOKIE_NAME } from '../constants'

export const getRefreshTokenFromCookies = () =>
    Cookies.get(REFRESH_TOKEN_COOKIE_NAME)
