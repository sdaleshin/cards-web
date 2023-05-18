import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReAuth } from '../baseQuery'
import { CardApiTypes } from './card.api.types'

export const cardApi = createApi({
    reducerPath: 'cardApi',
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        getCardsByFolderId: builder.query<CardApiTypes[], number>({
            query: (folderId) => '/cards/by-folder/' + folderId,
        }),
        getCards: builder.query<CardApiTypes[], void>({
            query: () => '/cards',
        }),
        addCard: builder.mutation<CardApiTypes, CardApiTypes>({
            query(body) {
                return {
                    url: `cards`,
                    method: 'POST',
                    body,
                }
            },
            async onQueryStarted(card, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    cardApi.util.updateQueryData(
                        'getCardsByFolderId',
                        card.folderId,
                        (draft) => {
                            draft.push(card as CardApiTypes)
                            // console.log('draft', draft)
                            // Object.assign(draft, card)
                        },
                    ),
                )
                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()

                    /**
                     * Alternatively, on failure you can invalidate the corresponding cache tags
                     * to trigger a re-fetch:
                     * dispatch(api.util.invalidateTags(['Post']))
                     */
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
