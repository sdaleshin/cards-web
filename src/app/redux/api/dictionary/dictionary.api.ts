import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DICTIONARY_API_URL } from '../../../utils/constants'
import {
    DictionaryApiResponse,
    DictionaryTranslation,
} from './dictionary.api.types'

export const dictionaryApi = createApi({
    reducerPath: 'dictionaryApi',
    baseQuery: fetchBaseQuery({ baseUrl: DICTIONARY_API_URL }),
    endpoints: (builder) => ({
        getTranslation: builder.query<DictionaryTranslation, string>({
            query: (word: string) => word,
            transformResponse(
                response: DictionaryApiResponse,
            ): DictionaryTranslation {
                return response[0]
            },
        }),
    }),
})

export const { useGetTranslationQuery } = dictionaryApi
