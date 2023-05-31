import { CardListItem } from './CardListItem'
import { CardDTO } from '../../../redux/api/card/card.api.types'
import { ExplanationTypeEnum } from '../../../types/explanation.types'

const skeletonData: CardDTO[] = [
    {
        id: '1',
        folderId: '1',
        type: ExplanationTypeEnum.Wordnet,
        title: 'make out',
        explanation: {
            def: 'an expression of greeting',
            exp: ['every morning they exchanged polite hellos'],
            pos: 'n',
            ptrs: [
                {
                    pos: 'n',
                    sourceTarget: '0000',
                    synsetOffset: 6630017,
                    pointerSymbol: '@',
                },
            ],
            wCnt: 5,
            gloss: 'an expression of greeting; "every morning they exchanged polite hellos"  ',
            lemma: 'hello',
            lexId: '0',
            synonyms: ['hello', 'hullo', 'hi', 'howdy', 'how-do-you-do'],
            lexFilenum: 10,
            synsetOffset: 6632511,
        },
        hash: '1',
    },
    {
        id: '2',
        folderId: '1',
        type: ExplanationTypeEnum.Wordnet,
        title: 'make out',
        explanation: {
            def: 'an expression of greeting',
            exp: ['every morning they exchanged polite hellos'],
            pos: 'n',
            ptrs: [
                {
                    pos: 'n',
                    sourceTarget: '0000',
                    synsetOffset: 6630017,
                    pointerSymbol: '@',
                },
            ],
            wCnt: 5,
            gloss: 'an expression of greeting; "every morning they exchanged polite hellos"  ',
            lemma: 'hello',
            lexId: '0',
            synonyms: ['hello', 'hullo', 'hi', 'howdy', 'how-do-you-do'],
            lexFilenum: 10,
            synsetOffset: 6632511,
        },
        hash: '1',
    },
    {
        id: '3',
        folderId: '1',
        type: ExplanationTypeEnum.Wordnet,
        title: 'make out',
        explanation: {
            def: 'an expression of greeting',
            exp: ['every morning they exchanged polite hellos'],
            pos: 'n',
            ptrs: [
                {
                    pos: 'n',
                    sourceTarget: '0000',
                    synsetOffset: 6630017,
                    pointerSymbol: '@',
                },
            ],
            wCnt: 5,
            gloss: 'an expression of greeting; "every morning they exchanged polite hellos"  ',
            lemma: 'hello',
            lexId: '0',
            synonyms: ['hello', 'hullo', 'hi', 'howdy', 'how-do-you-do'],
            lexFilenum: 10,
            synsetOffset: 6632511,
        },
        hash: '1',
    },
]

export const CardListSkeleton = () => {
    return (
        <>
            {skeletonData.map((card) => (
                <CardListItem card={card} key={card.id} skeleton={true} />
            ))}
        </>
    )
}
