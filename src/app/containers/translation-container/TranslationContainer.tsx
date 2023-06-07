import { TranslationInputContainer } from './translation-input-container/TranslationInputContainer'
import { useMemo, useState } from 'react'
import { TranslationDicType } from '../../components/translation/translation-dic-type/TranslationDicType'
import { useSelector } from 'react-redux'
import { selectTranslationWord } from '../../redux/translation/translation.slice'
import { useTranslationGetTranslation } from './useTranslationGetTranslation'
import { TranslationCard } from '../../components/translation/translation-card/TranslationCard'
import { ITranslationData } from '../../types/translation.types'
import { selectCurrentFolderId } from '../../redux/folder/folder.slice'
import { useGetFoldersQuery } from '../../redux/api/folder/folder.api'
import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'
import {
    useAddCardMutation,
    useDeleteCardMutation,
    useGetCardsByFolderIdQuery,
} from '../../redux/api/card/card.api'
import { generateId } from '../../utils/generateId'
import { ExplanationTypeEnum } from '../../types/explanation.types'
import { prepareTranslationData } from '../../utils/prepareTranslationData'

export const TranslationContainer = () => {
    const [dicType, setDicType] = useState(ExplanationTypeEnum.Wordnet)
    const [addCard] = useAddCardMutation()
    const [deleteCard] = useDeleteCardMutation()
    const word = useSelector(selectTranslationWord)
    const { isLoading, isError, error, data } = useTranslationGetTranslation(
        dicType,
        word,
    )
    const currentFolderId = useSelector(selectCurrentFolderId)
    const { data: cards } = useGetCardsByFolderIdQuery(currentFolderId, {
        skip: isNil(currentFolderId),
    })
    const preparedData = useMemo(
        () =>
            isEmpty(data)
                ? null
                : prepareTranslationData(data, dicType, currentFolderId, cards),
        [data, dicType, currentFolderId, cards],
    )

    const handleTranslationCardClick = (cardData: ITranslationData) => {
        if (cardData.added) {
            const existedCard = cards.find((c) => c.hash === cardData.hash)
            deleteCard({
                cardId: existedCard.id,
                folderId: existedCard.folderId,
            })
        } else {
            const newCard = {
                id: generateId(),
                title: cardData.word,
                hash: cardData.hash,
                type: dicType,
                explanation: cardData.explanation,
                folderId: currentFolderId,
            }
            addCard(newCard)
        }
    }

    const { data: folders } = useGetFoldersQuery()
    const currentFolderName =
        folders?.find((f) => f.id === currentFolderId)?.name ?? ''

    return (
        <>
            <TranslationInputContainer />
            <TranslationDicType
                dicType={dicType}
                onChange={(type) => setDicType(type)}
            />
            {!isNil(preparedData) && (
                <>
                    {preparedData.map((translationData, index) => (
                        <TranslationCard
                            {...translationData}
                            type={dicType}
                            onClick={handleTranslationCardClick}
                            currentFolderName={currentFolderName}
                            added={translationData.added}
                            key={translationData.hash}
                        />
                    ))}
                </>
            )}
        </>
    )
}
