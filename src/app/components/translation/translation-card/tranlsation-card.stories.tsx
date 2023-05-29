import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TranslationCard } from './TranslationCard'
import { ExplanationTypeEnum } from '../../../types/explanation.types'

export default {
    title: 'Components/Translation/TranslationCard',
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
    word: 'Hello',
    partOfSpeech: 'n',
    explanation: {
        gloss: 'Greeting',
    },
    currentFolderName: 'Current Folder Name',
    added: false,
    type: ExplanationTypeEnum.Wordnet,
}

export const AddedToFolder = Template.bind({})
AddedToFolder.args = {
    word: 'Hello',
    partOfSpeech: 'n',
    explanation: {
        gloss: 'Greeting',
    },
    type: ExplanationTypeEnum.Wordnet,
    added: true,
    currentFolderName: 'Current Folder Name',
}
