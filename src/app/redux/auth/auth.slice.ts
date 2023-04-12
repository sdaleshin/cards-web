import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../store'
import { getFullApiUrl } from '../../utils/getFullApiUrl'
import { addAuthTokenToCookies } from '../../utils/cookies/addAuthTokenToCookies'
import { removeJwtTokenFromCookies } from '../../utils/cookies/removeAuthTokenFromCookies'
import { parseJwt } from '../../utils/parseJwt'
import { addRefreshTokenToCookies } from '../../utils/cookies/addRefreshTokenToCookies'
import { removeRefreshTokenFromCookies } from '../../utils/cookies/removeRefreshTokenFromCookies'

export interface UserInfo {
    email: string
    name: string
}

export interface AuthState {
    jwtToken: string | null
    refreshToken: string | null
    userInfo: UserInfo
}

const initialState: AuthState = {
    jwtToken: null,
    refreshToken: null,
    userInfo: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setJwtTokenAndRefreshToken: (
            state,
            action: PayloadAction<{ token: string; refreshToken: string }>,
        ) => {
            const { token, refreshToken } = action.payload
            state.jwtToken = token
            state.refreshToken = refreshToken
            const { name, email } = parseJwt(token)
            state.userInfo = { name, email }
            addAuthTokenToCookies(token)
            addRefreshTokenToCookies(refreshToken)
        },
        removeJwtTokenAndRefreshToken: (state) => {
            state.jwtToken = null
            removeJwtTokenFromCookies()
            removeRefreshTokenFromCookies()
        },
    },
})

export const { setJwtTokenAndRefreshToken, removeJwtTokenAndRefreshToken } =
    authSlice.actions

export const selectAuthSlice = (state: RootState) => state.auth

export const selectJwtToken = (state: RootState) =>
    selectAuthSlice(state).jwtToken

export const selectRefreshToken = (state: RootState) =>
    selectAuthSlice(state).refreshToken

export const selectLoggedIn = (state: RootState) => !!selectJwtToken(state)

export const selectUserInfo = (state: RootState) =>
    selectAuthSlice(state).userInfo

export const authWithGoogleCredentials = createAsyncThunk(
    'auth/withGoogleCredentials',
    async (
        { credential, clientId }: { credential: string; clientId: string },
        { dispatch, rejectWithValue },
    ) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                getFullApiUrl('auth/login-or-register-with-google'),
                { credential, clientId },
                config,
            )
            dispatch(setJwtTokenAndRefreshToken(data))
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)
