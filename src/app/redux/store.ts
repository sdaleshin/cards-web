import {
    configureStore,
    PreloadedState,
    StateFromReducersMapObject,
} from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { folderApi } from './api/folder/folder.api'
import { dictionaryApi } from './api/dictionary/dictionary.api'
import { translationSlice } from './translation/translation.slice'
import { cardApi } from './api/card/card.api'
import { folderSlice } from './folder/folder.slice'

let store: any = null

const reducer = {
    [authSlice.name]: authSlice.reducer,
    [translationSlice.name]: translationSlice.reducer,
    [folderSlice.name]: folderSlice.reducer,
    [folderApi.reducerPath]: folderApi.reducer,
    [dictionaryApi.reducerPath]: dictionaryApi.reducer,
    [cardApi.reducerPath]: cardApi.reducer,
}

export type RootState = StateFromReducersMapObject<typeof reducer>

export const initializeStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({}).concat([
                folderApi.middleware,
                dictionaryApi.middleware,
                cardApi.middleware,
            ]),
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState,
    })
}

export type AppDispatch = typeof store.dispatch
