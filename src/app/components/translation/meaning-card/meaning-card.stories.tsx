import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MeaningCard } from './MeaningCard'
import { DictionaryTranslation } from '../../../redux/api/dictionary/dictionary.api.types'

export default {
    title: 'Components/MeaningCard',
    component: MeaningCard,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof MeaningCard>

const Template: ComponentStory<typeof MeaningCard> = (args) => (
    <MeaningCard {...args} />
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
