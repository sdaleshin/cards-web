import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { FolderDTO } from '../api/folder/folder.api.types'

export interface FolderState {
    currentFolderId?: string
}

const initialState: FolderState = {
    currentFolderId: undefined,
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

export const getFolderLastUpdatedAt = (folder: FolderDTO) =>
    folder.updatedAt > folder.cardsUpdatedAt || !folder.cardsUpdatedAt
        ? folder.updatedAt
        : folder.cardsUpdatedAt

export const validateFolderName = (name: string, folders?: FolderDTO[]) => {
    if (!name) {
        return "Name can't be empty"
    }
    if (folders?.find((f) => f.name === name)) {
        return 'This name is already in use'
    }
}
