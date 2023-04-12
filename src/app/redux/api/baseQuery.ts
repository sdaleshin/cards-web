import { API_BASE_URL } from '../../utils/constants'
import {
    removeJwtTokenAndRefreshToken,
    selectJwtToken,
    selectRefreshToken,
    setJwtTokenAndRefreshToken,
} from '../auth/auth.slice'
import { RootState } from '../store'
import {
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'

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

const mutex = new Mutex()
export const baseQueryWithReAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock()
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        // checking whether the mutex is locked
        if (!mutex.isLocked()) {
            const release = await mutex.acquire()
            try {
                const refreshToken = selectRefreshToken(
                    api.getState() as RootState,
                )
                const refreshResult = await baseQuery(
                    {
                        url: '/auth/refresh-token',
                        method: 'POST',
                        body: JSON.stringify({ refreshToken }),
                        headers: { 'Content-Type': 'application/json' },
                    },
                    api,
                    extraOptions,
                )
                if (refreshResult.data) {
                    api.dispatch(
                        setJwtTokenAndRefreshToken(
                            refreshResult.data as {
                                token: string
                                refreshToken: string
                            },
                        ),
                    )
                    // retry the initial query
                    result = await baseQuery(args, api, extraOptions)
                } else {
                    api.dispatch(removeJwtTokenAndRefreshToken())
                }
            } finally {
                // release must be called once the mutex should be released again.
                release()
            }
        } else {
            // wait until the mutex is available without locking it
            await mutex.waitForUnlock()
            result = await baseQuery(args, api, extraOptions)
        }
    }
    return result
}
