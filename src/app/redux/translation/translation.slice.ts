import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface TranslationState {
    searchInput: string
}

const initialState: TranslationState = {
    searchInput: '',
}

export const translationSlice = createSlice({
    name: 'translation',
    initialState,
    reducers: {
        setSearchInput: (state, action: PayloadAction<string>) => {
            state.searchInput = action.payload
        },
    },
})

export const { setSearchInput } = translationSlice.actions

export const selectTranslationSlice = (state: RootState) => state.translation

export const selectSearchInput = createSelector(
    selectTranslationSlice,
    (translationState) => translationState.searchInput,
)
