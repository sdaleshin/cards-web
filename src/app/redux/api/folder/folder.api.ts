import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReAuth } from '../baseQuery'
import { FolderApiTypes } from './folder.api.types'

export const folderApi = createApi({
    reducerPath: 'folderApi',
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        getFolders: builder.query<FolderApiTypes[], void>({
            query: () => '/folders',
        }),
    }),
})

export const { useGetFoldersQuery } = folderApi
