import { useGetTranslationFromFreeDictionaryQuery } from '../../redux/api/free-dictionary/free-dictionary.api'
import { useGetTranslationFromDictionaryQuery } from '../../redux/api/dictionary/dictionary.api'
import { ExplanationTypeEnum } from '../../types/explanation.types'

export function useTranslationGetTranslation(
    dicType: ExplanationTypeEnum,
    word: string,
) {
    const freeDicTranslation = useGetTranslationFromFreeDictionaryQuery(word, {
        skip: word === '' || dicType !== ExplanationTypeEnum.FreeDictionary,
    })
    const wordnetTranslation = useGetTranslationFromDictionaryQuery(word, {
        skip: word === '' || dicType !== ExplanationTypeEnum.Wordnet,
    })
    if (dicType === ExplanationTypeEnum.Wordnet) {
        return wordnetTranslation
    } else {
        return freeDicTranslation
    }
}
