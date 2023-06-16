import { useGetTranslationFromFreeDictionaryQuery } from '../../redux/api/free-dictionary/free-dictionary.api'
import { useGetTranslationFromDictionaryQuery } from '../../redux/api/dictionary/dictionary.api'
import { ExplanationTypeEnum } from '../../types/explanation.types'
import { useTranslateForDictionaryQuery } from '../../redux/api/translation/translation.api'

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
    const gptTranslation = useTranslateForDictionaryQuery(word, {
        skip: word === '' || dicType !== ExplanationTypeEnum.GPT,
    })
    if (dicType === ExplanationTypeEnum.Wordnet) {
        return wordnetTranslation
    } else if (dicType === ExplanationTypeEnum.FreeDictionary) {
        return freeDicTranslation
    } else {
        return gptTranslation
    }
}
