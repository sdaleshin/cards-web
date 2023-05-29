import {
    ExplanationDataType,
    ExplanationTypeEnum,
} from '../../../types/explanation.types'

export type CardDTO = {
    id: string
    title: string
    explanation: ExplanationDataType
    type: ExplanationTypeEnum
    folderId: string
    hash: string
}
