import {
    ExplanationDataType,
    ExplanationTypeEnum,
} from '../../types/explanation.types'
import { ExplanationFreeDic } from './ExplanationFreeDic'
import { ExplanationWordnet } from './ExplanationWordnet'
import { FreeDictionaryMeaning } from '../../redux/api/free-dictionary/free-dictionary.api.types'
import { WordnetDefinition } from '../../redux/api/dictionary/dictionary.api.types'
import { ExplanationGPT } from './ExplanationGPT'

export const Explanation = ({
    data,
    type,
}: {
    type: ExplanationTypeEnum
    data: ExplanationDataType
}) => {
    switch (type) {
        case ExplanationTypeEnum.Wordnet:
            return <ExplanationWordnet data={data as WordnetDefinition} />
        case ExplanationTypeEnum.FreeDictionary:
            return <ExplanationFreeDic data={data as FreeDictionaryMeaning} />
        case ExplanationTypeEnum.GPT:
            return <ExplanationGPT data={data as string} />
    }
}
