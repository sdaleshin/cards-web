import { AppDispatch, AppGetState } from '../store'
import { cardApi } from '../api/card/card.api'
import { selectCurrentFolderId } from '../folder/folder.slice'

export const createCardInCurrentFolder =
    (word: string) => (dispatch: AppDispatch, getState: AppGetState) => {
        const folderId = selectCurrentFolderId(getState())
        dispatch(cardApi.endpoints.addCard.initiate({ title: word, folderId }))
    }
