import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TranslationCard } from './TranslationCard'
import { ExplanationTypeEnum } from '../../../types/explanation.types'
import { WordnetDefinition } from '../../../redux/api/dictionary/dictionary.api.types'

export default {
    title: 'Components/Translation/TranslationCard',
    component: TranslationCard,
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
} as ComponentMeta<typeof TranslationCard>

const Template: ComponentStory<typeof TranslationCard> = (args) => (
    <TranslationCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
    word: 'hello',
    partOfSpeech: 'n',
    explanation: {
        gloss: 'Greeting',
        synonyms: ['hello', 'hi', 'how do you do'],
        exp: ['Hi how are you?', 'Say hello when come home'],
    } as WordnetDefinition,
    currentFolderName: 'Current Folder Name',
    added: false,
    type: ExplanationTypeEnum.Wordnet,
}

export const AddedToFolder = Template.bind({})
AddedToFolder.args = {
    word: 'hello',
    partOfSpeech: 'n',
    explanation: {
        gloss: 'Greeting',
        synonyms: ['hello', 'hi', 'how do you do'],
        exp: ['Hi how are you?', 'Say hello when come home'],
    } as WordnetDefinition,
    type: ExplanationTypeEnum.Wordnet,
    added: true,
    currentFolderName: 'Current Folder Name',
}
