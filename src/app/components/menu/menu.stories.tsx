import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Menu } from './Menu'

export default {
    title: 'Components/MenuContainer',
    component: Menu,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

export const Default = Template.bind({})
Default.args = {
    items: [{ id: 'aaa', title: 'bbb' }],
}
