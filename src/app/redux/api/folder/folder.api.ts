import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReAuth } from '../baseQuery'
import { FolderType } from './folder.type'

export const folderApi = createApi({
    reducerPath: 'folderApi',
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        getFolders: builder.query<FolderType[], void>({
            query: () => '/folders',
        }),
    }),
})

export const { useGetFoldersQuery } = folderApi
