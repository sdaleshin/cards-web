import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReAuth } from '../baseQuery'
import { CardDTO } from './card.api.types'
import { folderApi } from '../folder/folder.api'

export const cardApi = createApi({
    reducerPath: 'cardApi',
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        getCardsByFolderId: builder.query<CardDTO[], string>({
            query: (folderId) => '/cards/by-folder/' + folderId,
        }),
        getCards: builder.query<CardDTO[], void>({
            query: () => '/cards',
        }),
        addCard: builder.mutation<CardDTO, CardDTO>({
            query(body) {
                return {
                    url: `cards`,
                    method: 'POST',
                    body,
                }
            },
            async onQueryStarted(card, { dispatch, queryFulfilled }) {
                const updateCardsByFolderIdPatch = dispatch(
                    cardApi.util.updateQueryData(
                        'getCardsByFolderId',
                        card.folderId,
                        (draft) => {
                            draft.push(card as CardDTO)
                            // console.log('draft', draft)
                            // Object.assign(draft, card)
                        },
                    ),
                )
                const updateFoldersPatch = dispatch(
                    folderApi.util.updateQueryData(
                        'getFolders',
                        undefined,
                        (draft) => {
                            const folder = draft.find(
                                (folder) => folder.id === card.folderId,
                            )

                            folder.cardsCount = folder.cardsCount + 1
                            folder.cardsUpdatedAt = new Date().toJSON()
                            // draft.draft.push(card as CardDTO)
                            // // console.log('draft', draft)
                            // // Object.assign(draft, card)
                        },
                    ),
                )
                try {
                    await queryFulfilled
                } catch {
                    updateCardsByFolderIdPatch.undo()
                    updateFoldersPatch.undo()
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
