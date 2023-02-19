import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CardEditor } from './CardEditor'

export default {
    title: 'Components/MenuContainer',
    component: CardEditor,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof CardEditor>

const Template: ComponentStory<typeof CardEditor> = (args) => (
    <CardEditor {...args} />
)

export const Default = Template.bind({})
Default.args = {}
