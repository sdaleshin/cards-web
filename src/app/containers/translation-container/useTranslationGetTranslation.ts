import { useGetTranslationFromFreeDictionaryQuery } from '../../redux/api/free-dictionary/free-dictionary.api'
import { useGetTranslationFromDictionaryQuery } from '../../redux/api/dictionary/dictionary.api'
import { TranslationDicTypeEnum } from '../../types/translation.types'

export function useTranslationGetTranslation(
    dicType: TranslationDicTypeEnum,
    word: string,
) {
    const freeDicTranslation = useGetTranslationFromFreeDictionaryQuery(word, {
        skip: word === '' || dicType !== TranslationDicTypeEnum.FreeDictionary,
    })
    const wordnetTranslation = useGetTranslationFromDictionaryQuery(word, {
        skip: word === '' || dicType !== TranslationDicTypeEnum.Wordnet,
    })
    if (dicType === TranslationDicTypeEnum.Wordnet) {
        return wordnetTranslation
    } else {
        return freeDicTranslation
    }
}
