import {
    configureStore,
    PreloadedState,
    StateFromReducersMapObject,
} from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { folderApi } from './api/folder/folder.api'
import { freeDictionaryApi } from './api/free-dictionary/free-dictionary.api'
import { translationSlice } from './translation/translation.slice'
import { cardApi } from './api/card/card.api'
import { folderSlice } from './folder/folder.slice'
import { listenerMiddleware } from './listenerMiddleware'
import { dictionaryApi } from './api/dictionary/dictionary.api'

let store: any = null

const reducer = {
    [authSlice.name]: authSlice.reducer,
    [translationSlice.name]: translationSlice.reducer,
    [folderSlice.name]: folderSlice.reducer,
    [folderApi.reducerPath]: folderApi.reducer,
    [freeDictionaryApi.reducerPath]: freeDictionaryApi.reducer,
    [cardApi.reducerPath]: cardApi.reducer,
    [dictionaryApi.reducerPath]: dictionaryApi.reducer,
}

export type RootState = StateFromReducersMapObject<typeof reducer>

export const initializeStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({})
                .prepend(listenerMiddleware.middleware)
                .concat([
                    folderApi.middleware,
                    freeDictionaryApi.middleware,
                    cardApi.middleware,
                    dictionaryApi.middleware,
                ]),
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState,
    })
}

export type AppDispatch = typeof store.dispatch
export type AppGetState = typeof store.getState
