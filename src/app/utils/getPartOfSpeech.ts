import {
    ExplanationDataType,
    ExplanationTypeEnum,
} from '../types/explanation.types'
import { WordnetDefinition } from '../redux/api/dictionary/dictionary.api.types'
import { FreeDictionaryMeaning } from '../redux/api/free-dictionary/free-dictionary.api.types'

const wordnetPartOfSpeechDic: { [key: string]: string } = {
    n: 'noun',
    v: 'verb',
    a: 'adj',
    r: 'adv',
}

export const getPartOfSpeech = (
    explanation: ExplanationDataType,
    type: ExplanationTypeEnum,
) => {
    if (type === ExplanationTypeEnum.Wordnet) {
        return wordnetPartOfSpeechDic[(explanation as WordnetDefinition).pos]
    } else if (type === ExplanationTypeEnum.FreeDictionary) {
        return (explanation as FreeDictionaryMeaning).partOfSpeech
    }
}
