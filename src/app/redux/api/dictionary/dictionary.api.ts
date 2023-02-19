import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DICTIONARY_API_URL } from '../../../utils/constants'
import { DictionaryApiResponse } from './dictionary.api.types'

export const dictionaryApi = createApi({
    reducerPath: 'dictionaryApi',
    baseQuery: fetchBaseQuery({ baseUrl: DICTIONARY_API_URL }),
    endpoints: (builder) => ({
        getTranslation: builder.query<DictionaryApiResponse, string>({
            query: (word: string) => word,
        }),
    }),
})

export const { useGetTranslationQuery } = dictionaryApi
