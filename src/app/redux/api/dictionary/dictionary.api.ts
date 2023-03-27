import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../baseQuery'
import { Definition } from './dictionary.api.types'

export const dictionaryApi = createApi({
    reducerPath: 'dictionaryApi',
    baseQuery,
    endpoints: (builder) => ({
        getTranslationFromDictionary: builder.query<Definition[], string>({
            query: (word: string) => '/dictionary/' + word,
        }),
    }),
})

export const { useGetTranslationFromDictionaryQuery } = dictionaryApi
