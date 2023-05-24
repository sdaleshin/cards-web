import { Definition } from '../redux/api/dictionary/dictionary.api.types'
import { FreeDictionaryMeaning } from '../redux/api/free-dictionary/free-dictionary.api.types'

export enum TranslationDicTypeEnum {
    FreeDictionary = 'freedic',
    Wordnet = 'wordnet',
}

export interface ITranslationData {
    word: string
    partOfSpeech: string
    explanation: Definition | FreeDictionaryMeaning
}
