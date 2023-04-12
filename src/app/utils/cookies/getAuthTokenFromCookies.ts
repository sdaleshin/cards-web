import Cookies from 'js-cookie'
import { AUTH_TOKEN_COOKIE_NAME } from '../constants'

export const getAuthTokenFromCookies = () => Cookies.get(AUTH_TOKEN_COOKIE_NAME)
