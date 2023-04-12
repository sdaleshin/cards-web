import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReAuth } from '../baseQuery'
import { CardType } from './cardType'

export const cardApi = createApi({
    reducerPath: 'cardApi',
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        getCardsByFolderId: builder.query<CardType[], number>({
            query: (folderId) => '/cards/by-folder/' + folderId,
        }),
        getCards: builder.query<CardType[], void>({
            query: () => '/cards',
        }),
        addCard: builder.mutation<CardType, Partial<CardType>>({
            query(body) {
                return {
                    url: `cards`,
                    method: 'POST',
                    body,
                }
            },
        }),
    }),
})

export const {
    useGetCardsByFolderIdQuery,
    useGetCardsQuery,
    useAddCardMutation,
} = cardApi
