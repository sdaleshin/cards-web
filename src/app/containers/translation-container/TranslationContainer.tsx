import { TranslationInputContainer } from './translation-input-container/TranslationInputContainer'
import { FunctionComponent, useMemo, useState } from 'react'
import { TranslationDicType } from '../../components/translation/translation-dic-type/TranslationDicType'
import { useDispatch, useSelector } from 'react-redux'
import { selectTranslationWord } from '../../redux/translation/translation.slice'
import { useTranslationGetTranslation } from './useTranslationGetTranslation'
import { FreeDictionaryTranslation } from '../../redux/api/free-dictionary/free-dictionary.api.types'
import { Definition } from '../../redux/api/dictionary/dictionary.api.types'
import { TranslationCard } from '../../components/translation/translation-card/TranslationCard'
import {
    ITranslationData,
    TranslationDicTypeEnum,
} from '../../types/translation'
import { TranslationCardBodyWordnet } from '../../components/translation/translation-card-body/TranslationCardBodyWordnet'
import { TranslationCardBodyFreeDic } from '../../components/translation/translation-card-body/TranslationCardBodyFreeDic'
import { selectCurrentFolderId } from '../../redux/folder/folder.slice'
import { useGetFoldersQuery } from '../../redux/api/folder/folder.api'
import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'
import { createCardInCurrentFolder } from '../../redux/card/card.slice'
import { getHash } from '../../utils/getHash'
import { useGetCardsByFolderIdQuery } from '../../redux/api/card/card.api'
import { CardApiTypes } from '../../redux/api/card/card.api.types'

const getBodyComponentByTranslationDicTypeEnum = (
    dicType: TranslationDicTypeEnum,
): FunctionComponent<ITranslationData> => {
    if (dicType === TranslationDicTypeEnum.Wordnet) {
        return TranslationCardBodyWordnet
    } else if (dicType === TranslationDicTypeEnum.FreeDictionary) {
        return TranslationCardBodyFreeDic
    }
}

const prepareData = (
    data: Definition[] | FreeDictionaryTranslation,
    dicType: TranslationDicTypeEnum,
    word: string,
    folderId: number,
    cards: CardApiTypes[],
) => {
    if (dicType === TranslationDicTypeEnum.Wordnet) {
        return (data as Definition[]).map((d) => {
            const hash = getHash({
                title: word,
                explanation: d,
                folderId,
                type: dicType,
            })
            return {
                word,
                partOfSpeech: d.pos,
                rawData: d,
                hash,
                added: !!cards?.find((c) => c.hash === hash),
            }
        })
    } else if (dicType === TranslationDicTypeEnum.FreeDictionary) {
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
                rawData: m,
                hash,
                added: !!cards?.find((c) => c.hash === hash),
            }
        })
    }
}

export const TranslationContainer = () => {
    const [dicType, setDicType] = useState(TranslationDicTypeEnum.Wordnet)
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
        dispatch(createCardInCurrentFolder(word, cardData.rawData, dicType))
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
                            BodyComponent={getBodyComponentByTranslationDicTypeEnum(
                                dicType,
                            )}
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
