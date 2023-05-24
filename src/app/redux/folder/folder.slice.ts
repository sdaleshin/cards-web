import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface FolderState {
    currentFolderId: string | null
}

const initialState: FolderState = {
    currentFolderId: null,
}

export const folderSlice = createSlice({
    name: 'folder',
    initialState,
    reducers: {
        setCurrentFolderId: (state, action: PayloadAction<string>) => {
            state.currentFolderId = action.payload
        },
    },
})

export const { setCurrentFolderId } = folderSlice.actions

export const selectFolderSlice = (state: RootState) => state.folder

export const selectCurrentFolderId = createSelector(
    selectFolderSlice,
    (folderState) => folderState.currentFolderId,
)
