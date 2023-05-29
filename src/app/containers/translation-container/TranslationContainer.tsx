import { TranslationInputContainer } from './translation-input-container/TranslationInputContainer'
import { FunctionComponent, useMemo, useState } from 'react'
import { TranslationDicType } from '../../components/translation/translation-dic-type/TranslationDicType'
import { useDispatch, useSelector } from 'react-redux'
import { selectTranslationWord } from '../../redux/translation/translation.slice'
import { useTranslationGetTranslation } from './useTranslationGetTranslation'
import { FreeDictionaryTranslation } from '../../redux/api/free-dictionary/free-dictionary.api.types'
import { WordnetDefinition } from '../../redux/api/dictionary/dictionary.api.types'
import { TranslationCard } from '../../components/translation/translation-card/TranslationCard'
import { ITranslationData } from '../../types/translation.types'
import { selectCurrentFolderId } from '../../redux/folder/folder.slice'
import { useGetFoldersQuery } from '../../redux/api/folder/folder.api'
import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'
import { createCardInCurrentFolder } from '../../redux/card/card.slice'
import { getHash } from '../../utils/getHash'
import { useGetCardsByFolderIdQuery } from '../../redux/api/card/card.api'
import { CardDTO } from '../../redux/api/card/card.api.types'
import { generateId } from '../../utils/generateId'
import { ExplanationTypeEnum } from '../../types/explanation.types'

const prepareData = (
    data: WordnetDefinition[] | FreeDictionaryTranslation,
    dicType: ExplanationTypeEnum,
    word: string,
    folderId: string,
    cards: CardDTO[],
) => {
    if (dicType === ExplanationTypeEnum.Wordnet) {
        return (data as WordnetDefinition[]).map((d) => {
            const hash = getHash({
                title: word,
                explanation: d,
                type: dicType,
            })
            return {
                word,
                partOfSpeech: d.pos,
                explanation: d,
                hash,
                added: !!cards?.find((c) => c.hash === hash),
            }
        })
    } else if (dicType === ExplanationTypeEnum.FreeDictionary) {
        return (data as FreeDictionaryTranslation).meanings.map((m) => {
            const hash = getHash({
                title: word,
                explanation: m,
                folderId,
                type: dicType,
            })
            return {
                word,
                partOfSpeech: m.partOfSpeech,
                explanation: m,
                hash,
                added: !!cards?.find((c) => c.hash === hash),
            }
        })
    }
}

export const TranslationContainer = () => {
    const [dicType, setDicType] = useState(ExplanationTypeEnum.Wordnet)
    const word = useSelector(selectTranslationWord)
    const dispatch = useDispatch()
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
                : prepareData(data, dicType, word, currentFolderId, cards),
        [data, dicType, word, currentFolderId, cards],
    )

    const handleTranslationCardClick = (cardData: ITranslationData) => {
        const newCard: Omit<CardDTO, 'folderId'> = {
            id: generateId(),
            title: cardData.word,
            hash: getHash({
                title: cardData.word,
                explanation: cardData.explanation,
                type: dicType,
            }),
            type: dicType,
            explanation: cardData.explanation,
        }
        dispatch(createCardInCurrentFolder(newCard))
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
