import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { listenerMiddleware } from '../listenerMiddleware'
import trim from 'lodash/trim'

export interface TranslationState {
    searchInputValue: string
    word: string
}

const initialState: TranslationState = {
    searchInputValue: '',
    word: '',
}

export const translationSlice = createSlice({
    name: 'translation',
    initialState,
    reducers: {
        setSearchInputValue: (state, action: PayloadAction<string>) => {
            state.searchInputValue = action.payload
        },
        setWord: (state, action: PayloadAction<string>) => {
            state.word = action.payload
        },
    },
})

export const { setSearchInputValue, setWord } = translationSlice.actions

listenerMiddleware.startListening({
    actionCreator: setSearchInputValue,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners()
        await listenerApi.delay(500)
        listenerApi.dispatch(setWord(trim(action.payload)))
    },
})

export const selectTranslationSlice = (state: RootState) => state.translation

export const selectSearchInput = (state: RootState) =>
    selectTranslationSlice(state).searchInputValue

export const selectTranslationWord = (state: RootState) =>
    selectTranslationSlice(state).word
