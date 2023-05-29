import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReAuth } from '../baseQuery'
import { WordnetDefinition } from './dictionary.api.types'

export const dictionaryApi = createApi({
    reducerPath: 'dictionaryApi',
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        getTranslationFromDictionary: builder.query<
            WordnetDefinition[],
            string
        >({
            query: (word: string) => '/dictionary/' + word,
        }),
    }),
})

export const { useGetTranslationFromDictionaryQuery } = dictionaryApi
