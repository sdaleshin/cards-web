import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReAuth } from '../baseQuery'
import { CreateChatCompletionResponse } from 'openai'
import { TranslationForDictionaryDTO } from './translation.api.types'

export const translationApi = createApi({
    reducerPath: 'translationApi',
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        translateForDictionary: builder.query<
            TranslationForDictionaryDTO,
            string
        >({
            query: (word) => {
                return {
                    url: `/translation/for-dictionary`,
                    method: 'POST',
                    body: {
                        word,
                    },
                }
            },
        }),
    }),
})

export const { useTranslateForDictionaryQuery } = translationApi
