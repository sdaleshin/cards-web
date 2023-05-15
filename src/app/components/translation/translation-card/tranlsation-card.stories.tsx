import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TranslationCard } from './TranslationCard'

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
    explanation: 'explanation',
    currentFolderName: 'Current Folder Name',
    added: false,
}

export const AddedToFolder = Template.bind({})
AddedToFolder.args = {
    word: 'Hello',
    partOfSpeech: 'n',
    explanation: 'explanation',
    added: true,
    currentFolderName: 'Current Folder Name',
}
