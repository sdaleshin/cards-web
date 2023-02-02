import { API_BASE_URL } from './constants'

export function getFullApiUrl(url: string) {
    return API_BASE_URL + url
}
