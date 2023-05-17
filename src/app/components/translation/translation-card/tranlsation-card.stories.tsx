import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TranslationCard } from './TranslationCard'
import { TranslationCardBodyWordnet } from '../translation-card-body/TranslationCardBodyWordnet'

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
    rawData: {
        gloss: 'Greeting',
    },
    BodyComponent: TranslationCardBodyWordnet,
    currentFolderName: 'Current Folder Name',
    added: false,
}

export const AddedToFolder = Template.bind({})
AddedToFolder.args = {
    word: 'Hello',
    partOfSpeech: 'n',
    rawData: {
        gloss: 'Greeting',
    },
    BodyComponent: TranslationCardBodyWordnet,
    added: true,
    currentFolderName: 'Current Folder Name',
}
