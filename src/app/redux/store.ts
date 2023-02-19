import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { folderApi } from './api/folder/folder.api'
import { dictionaryApi } from './api/dictionary/dictionary.api'
import { translationSlice } from './translation/translation.slice'

export const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer,
        [translationSlice.name]: translationSlice.reducer,
        [folderApi.reducerPath]: folderApi.reducer,
        [dictionaryApi.reducerPath]: dictionaryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([
            folderApi.middleware,
            dictionaryApi.middleware,
        ]),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
