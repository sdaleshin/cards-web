import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../../../utils/constants'

export const folderApi = createApi({
    reducerPath: 'folderApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    endpoints: (builder) => ({
        getFolders: builder.query<any, void>({
            query: () => '/folders',
        }),
    }),
})

export const { useGetFoldersQuery } = folderApi
