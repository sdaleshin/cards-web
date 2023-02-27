import { API_BASE_URL } from '../../utils/constants'
import { selectJwtToken } from '../auth/auth.slice'
import { RootState } from '../store'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const jwtToken = selectJwtToken(getState() as RootState)
        if (jwtToken) {
            headers.set('Authorization', `Bearer ${jwtToken}`)
        }
        return headers
    },
})
