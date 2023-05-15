import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TranslationCardFreeDic } from './TranslationCardFreeDic'

export default {
    title: 'Components/Translation/TranslationCardFreeDic',
    component: TranslationCardFreeDic,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof TranslationCardFreeDic>

const Template: ComponentStory<typeof TranslationCardFreeDic> = (args) => (
    <TranslationCardFreeDic {...args} />
)

export const Default = Template.bind({})
Default.args = {
    word: 'Hello',
    meaning: {
        partOfSpeech: 'n',
        definitions: [
            {
                definition: 'definition 1',
            },
            {
                definition: 'definition 2',
            },
        ],
    },
}
