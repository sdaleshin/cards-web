import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReAuth } from '../baseQuery'
import { CardDTO } from './card.api.types'
import { folderApi } from '../folder/folder.api'
import { getCurrentDateString } from '../../../utils/getCurrentDateString'
import findIndex from 'lodash/findIndex'

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
                            folder.cardsUpdatedAt = getCurrentDateString()
                        },
                    ),
                )
                try {
                    await queryFulfilled
                } catch {
                    updateCardsByFolderIdPatch.undo()
                    updateFoldersPatch.undo()
                }
            },
        }),
        deleteCard: builder.mutation<
            void,
            { cardId: string; folderId: string }
        >({
            query({ cardId, folderId }) {
                return {
                    url: `cards/${cardId}`,
                    method: 'DELETE',
                }
            },
            async onQueryStarted(
                { cardId, folderId },
                { dispatch, queryFulfilled },
            ) {
                const updateCardsByFolderIdPatch = dispatch(
                    cardApi.util.updateQueryData(
                        'getCardsByFolderId',
                        folderId,
                        (draft) => {
                            const index = findIndex(
                                draft,
                                (c) => c.id === cardId,
                            )
                            draft.splice(index, index)
                        },
                    ),
                )
                const updateFoldersPatch = dispatch(
                    folderApi.util.updateQueryData(
                        'getFolders',
                        undefined,
                        (draft) => {
                            const folder = draft.find(
                                (folder) => folder.id === folderId,
                            )

                            folder.cardsCount = folder.cardsCount - 1
                            folder.cardsUpdatedAt = getCurrentDateString()
                        },
                    ),
                )
                try {
                    await queryFulfilled
                } catch {
                    updateCardsByFolderIdPatch.undo()
                    updateFoldersPatch.undo()
                }
            },
        }),
    }),
})

export const {
    useGetCardsByFolderIdQuery,
    useGetCardsQuery,
    useAddCardMutation,
    useDeleteCardMutation,
} = cardApi
