import { WordnetDefinition } from '../redux/api/dictionary/dictionary.api.types'
import { FreeDictionaryMeaning } from '../redux/api/free-dictionary/free-dictionary.api.types'

export type ExplanationDataType =
    | WordnetDefinition
    | FreeDictionaryMeaning
    | string

export enum ExplanationTypeEnum {
    FreeDictionary = 'freedic',
    Wordnet = 'wordnet',
    GPT = 'gpt',
}
