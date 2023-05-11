import { PreloadedState } from '@reduxjs/toolkit'
import { RootState } from '../redux/store'

export {}

declare global {
    interface Window {
        __PRELOADED_STATE__: PreloadedState<RootState>
        google: any
        handleLoginWithGoogleResponse: () => void
    }
}
