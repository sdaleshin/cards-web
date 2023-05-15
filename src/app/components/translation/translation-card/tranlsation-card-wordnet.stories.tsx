import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TranslationCardWordnet } from './TranslationCardWordnet'

export default {
    title: 'Components/Translation/TranslationCardWordnet',
    component: TranslationCardWordnet,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof TranslationCardWordnet>

const Template: ComponentStory<typeof TranslationCardWordnet> = (args) => (
    <TranslationCardWordnet {...args} />
)

export const Default = Template.bind({})
Default.args = {
    word: 'Hello',
    definition: {
        pos: 'n',
        gloss: 'an expression of greeting; "every morning they exchanged polite hellos"',
    },
    currentFolderName: 'Current Folder Name',
    added: false,
}
