import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReAuth } from '../baseQuery'
import { FolderDTO } from './folder.api.types'
import { cardApi } from '../card/card.api'
import { getCurrentDateString } from '../../../utils/getCurrentDateString'

export const folderApi = createApi({
    reducerPath: 'folderApi',
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        getFolders: builder.query<FolderDTO[], void>({
            query: () => '/folders',
        }),
        addFolder: builder.mutation<FolderDTO, FolderDTO>({
            query(body) {
                return {
                    url: `folders`,
                    method: 'POST',
                    body,
                }
            },
            async onQueryStarted(folder, { dispatch, queryFulfilled }) {
                const updateFolders = dispatch(
                    folderApi.util.updateQueryData(
                        'getFolders',
                        undefined,
                        (draft) => {
                            draft.push(folder)
                        },
                    ),
                )

                const updateCards = dispatch(
                    cardApi.util.upsertQueryData(
                        'getCardsByFolderId',
                        folder.id,
                        [],
                    ),
                )

                try {
                    await queryFulfilled
                } catch {
                    updateFolders.undo()
                }
            },
        }),
        updateFolder: builder.mutation<FolderDTO, FolderDTO>({
            query(folder) {
                return {
                    url: `folders/${folder.id}`,
                    method: 'PUT',
                    body: { name: folder.name, parentId: folder.parentId },
                }
            },
            async onQueryStarted(folder, { dispatch, queryFulfilled }) {
                const updateFolders = dispatch(
                    folderApi.util.updateQueryData(
                        'getFolders',
                        undefined,
                        (draft) => {
                            const foundFolder = draft.find(
                                (f) => f.id === folder.id,
                            )
                            foundFolder.name = folder.name
                            foundFolder.updatedAt = getCurrentDateString()
                        },
                    ),
                )

                try {
                    await queryFulfilled
                } catch {
                    updateFolders.undo()
                }
            },
        }),
    }),
})

export const {
    useGetFoldersQuery,
    useAddFolderMutation,
    useUpdateFolderMutation,
} = folderApi
