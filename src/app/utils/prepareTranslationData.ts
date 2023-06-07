import { WordnetDefinition } from '../redux/api/dictionary/dictionary.api.types'
import { FreeDictionaryTranslation } from '../redux/api/free-dictionary/free-dictionary.api.types'
import { ExplanationTypeEnum } from '../types/explanation.types'
import { CardDTO } from '../redux/api/card/card.api.types'
import { getHash } from './getHash'
import { ITranslationData } from '../types/translation.types'

export const prepareTranslationData = (
    data: WordnetDefinition[] | FreeDictionaryTranslation,
    dicType: ExplanationTypeEnum,
    folderId: string,
    cards: CardDTO[],
): ITranslationData[] => {
    if (dicType === ExplanationTypeEnum.Wordnet) {
        return (data as WordnetDefinition[]).map((d) => {
            const hash = getHash({
                title: d.word,
                explanation: d,
                folderId,
                type: dicType,
            })
            return {
                word: d.word,
                partOfSpeech: d.pos,
                explanation: d,
                hash,
                added: !!cards?.find((c) => c.hash === hash),
            }
        })
    } else if (dicType === ExplanationTypeEnum.FreeDictionary) {
        return (data as FreeDictionaryTranslation).meanings.map((m) => {
            const hash = getHash({
                title: (data as FreeDictionaryTranslation).word,
                explanation: m,
                folderId,
                type: dicType,
            })
            return {
                word: (data as FreeDictionaryTranslation).word,
                partOfSpeech: m.partOfSpeech,
                explanation: m,
                hash,
                added: !!cards?.find((c) => c.hash === hash),
            }
        })
    }
}
