import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface AuthState {
    loggedIn: boolean
    jwtToken: string | null
}

const initialState: AuthState = {
    loggedIn: false,
    jwtToken: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setJwtToken: (state, action: PayloadAction<string>) => {
            state.jwtToken = action.payload
        },
        setLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.loggedIn = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setJwtToken, setLoggedIn } = authSlice.actions

export const selectLoggedIn = (state: RootState) => state.auth.loggedIn
