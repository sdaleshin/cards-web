import jwt_decode from 'jwt-decode'

export type JwtPayloadType = {
    name: string
    email: string
    iat: number
    exp: number
}
export function parseJwt(token: string) {
    return jwt_decode<JwtPayloadType>(token)
}
