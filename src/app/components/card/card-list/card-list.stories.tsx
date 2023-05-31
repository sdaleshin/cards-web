import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CardList } from './CardList'
import { ExplanationTypeEnum } from '../../../types/explanation.types'

export default {
    title: 'Components/CardList',
    component: CardList,
    parameters: {
        layout: 'fullscreen',
        viewport: {
            viewports: {
                mobile: {
                    name: 'mobile',
                    styles: {
                        width: '390px',
                        height: '844px',
                    },
                },
                desktop: {
                    name: 'desktop',
                    styles: {
                        width: '1440px',
                        height: '800px',
                    },
                },
            },
            defaultViewport: 'desktop',
        },
    },
} as ComponentMeta<typeof CardList>

const Template: ComponentStory<typeof CardList> = (args) => (
    <CardList {...args} />
)

export const Default = Template.bind({})
Default.args = {
    cards: [
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
    ],
}
