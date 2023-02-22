import { PreloadedState } from '@reduxjs/toolkit'
import { initializeStore, RootState } from '../app/redux/store'

let store: any = null

export const getClientStore = (preloadedState?: PreloadedState<RootState>) => {
    if (!store) {
        store = initializeStore(preloadedState)
    }
    return store
}
