import { AppDispatch, AppGetState } from '../store'
import { cardApi } from '../api/card/card.api'
import { selectCurrentFolderId } from '../folder/folder.slice'
import { CardApiTypes } from '../api/card/card.api.types'

export const createCardInCurrentFolder =
    (cardData: Omit<CardApiTypes, 'folderId'>) =>
    (dispatch: AppDispatch, getState: AppGetState) => {
        const folderId = selectCurrentFolderId(getState())

        dispatch(cardApi.endpoints.addCard.initiate({ ...cardData, folderId }))
    }
