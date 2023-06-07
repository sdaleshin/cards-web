import { ExplanationDataType } from './explanation.types'

export interface ITranslationData {
    word: string
    partOfSpeech: string
    explanation: ExplanationDataType
    added: boolean
    hash: string
}
