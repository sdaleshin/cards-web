import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DICTIONARY_API_URL } from '../../../utils/constants'
import {
    FreeDictionaryApiResponse,
    FreeDictionaryTranslation,
} from './free-dictionary.api.types'

export const freeDictionaryApi = createApi({
    reducerPath: 'freeDictionaryApi',
    baseQuery: fetchBaseQuery({ baseUrl: DICTIONARY_API_URL }),
    endpoints: (builder) => ({
        getTranslationFromFreeDictionary: builder.query<
            FreeDictionaryTranslation,
            string
        >({
            query: (word: string) => word,
            transformResponse(
                response: FreeDictionaryApiResponse,
            ): FreeDictionaryTranslation {
                return response[0]
            },
        }),
    }),
})

export const { useGetTranslationFromFreeDictionaryQuery } = freeDictionaryApi
