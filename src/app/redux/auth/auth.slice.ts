import {
    createAsyncThunk,
    createSelector,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../store'
import { getFullApiUrl } from '../../utils/getFullApiUrl'
import { addJwtTokenToCookies } from '../../utils/cookies/addJwtTokenToCookies'
import { removeJwtTokenToCookies } from '../../utils/cookies/removeJwtTokenFromCookies'
import { parseJwt } from '../../utils/parseJwt'

export interface UserInfo {
    email: string
    name: string
}

export interface AuthState {
    jwtToken: string | null
    userInfo: UserInfo
}

const initialState: AuthState = {
    jwtToken: null,
    userInfo: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setJwtToken: (state, action: PayloadAction<string>) => {
            state.jwtToken = action.payload
            const { name, email } = parseJwt(action.payload)
            state.userInfo = { name, email }
            addJwtTokenToCookies(action.payload)
        },
        removeJwtToken: (state) => {
            state.jwtToken = null
            removeJwtTokenToCookies()
        },
    },
})

export const { setJwtToken, removeJwtToken } = authSlice.actions

export const selectAuthSlice = (state: RootState) => state.auth

export const selectJwtToken = createSelector(
    selectAuthSlice,
    (authState) => authState.jwtToken,
)

export const selectLoggedIn = createSelector(
    selectJwtToken,
    (jwtToken) => !!jwtToken,
)

export const selectUserInfo = createSelector(
    selectAuthSlice,
    (authState) => authState.userInfo,
)

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
            dispatch(setJwtToken(data.token))
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
