import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TranslationCard } from './TranslationCard'
import { DictionaryTranslation } from '../../../redux/api/dictionary/dictionary.api.types'

export default {
    title: 'Components/TranslationCard',
    component: TranslationCard,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof TranslationCard>

const Template: ComponentStory<typeof TranslationCard> = (args) => (
    <TranslationCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
    translation: {
        word: 'Hello',
        meanings: [
            {
                partOfSpeech: 'noun',
                definitions: [
                    {
                        definition: 'Common greeting',
                    },
                ],
                synonyms: [],
                antonyms: [],
            },
        ],
    } as DictionaryTranslation,
}
