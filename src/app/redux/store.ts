import {
    configureStore,
    PreloadedState,
    StateFromReducersMapObject,
} from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { folderApi } from './api/folder/folder.api'
import { dictionaryApi } from './api/dictionary/dictionary.api'
import { translationSlice } from './translation/translation.slice'

let store: any = null

const reducer = {
    [authSlice.name]: authSlice.reducer,
    [translationSlice.name]: translationSlice.reducer,
    [folderApi.reducerPath]: folderApi.reducer,
    [dictionaryApi.reducerPath]: dictionaryApi.reducer,
}

export type RootState = StateFromReducersMapObject<typeof reducer>

export const getStore = (preloadedState?: PreloadedState<RootState>) => {
    if (!store) {
        store = configureStore({
            reducer,
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware({}).concat([
                    folderApi.middleware,
                    dictionaryApi.middleware,
                ]),
            devTools: process.env.NODE_ENV !== 'production',
            preloadedState,
        })
    }
    return store
}

export type AppDispatch = typeof store.dispatch
