import { AppDispatch, AppGetState } from '../store'
import { cardApi } from '../api/card/card.api'
import { selectCurrentFolderId } from '../folder/folder.slice'
import { TranslationDicTypeEnum } from '../../types/translation'

export const createCardInCurrentFolder =
    (word: string, explanation: object, type: TranslationDicTypeEnum) =>
    (dispatch: AppDispatch, getState: AppGetState) => {
        const folderId = selectCurrentFolderId(getState())
        dispatch(
            cardApi.endpoints.addCard.initiate({
                title: word,
                folderId,
                explanation,
                type,
            }),
        )
    }
