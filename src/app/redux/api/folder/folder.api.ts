import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../baseQuery'
import { FolderType } from './folder.type'

export const folderApi = createApi({
    reducerPath: 'folderApi',
    baseQuery,
    endpoints: (builder) => ({
        getFolders: builder.query<FolderType[], void>({
            query: () => '/folders',
        }),
    }),
})

export const { useGetFoldersQuery } = folderApi
