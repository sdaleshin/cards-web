import {
    createAsyncThunk,
    createSelector,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../store'
import { getFullApiUrl } from '../../utils/getFullApiUrl'
import { LOCAL_STORAGE_AUTH_TOKEN } from '../../utils/constants'

export interface AuthState {
    jwtToken: string | null
}

const initialState: AuthState = {
    jwtToken: null, //localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN),
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setJwtToken: (state, action: PayloadAction<string>) => {
            state.jwtToken = action.payload
        },
    },
})

export const { setJwtToken } = authSlice.actions

export const selectAuthSlice = (state: RootState) => state.auth

export const selectLoggedIn = createSelector(
    selectAuthSlice,
    (authState) => !!authState.jwtToken,
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
            localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, data.token)
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
