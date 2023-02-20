import Cookies from 'js-cookie'
import { AUTH_TOKEN_COOKIE_NAME } from '../constants'

export const getJwtTokenFromCookies = () => Cookies.get(AUTH_TOKEN_COOKIE_NAME)
