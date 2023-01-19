import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuContainer } from './MenuContainer'

export default {
    title: 'Containers/MenuContainer',
    component: MenuContainer,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof MenuContainer>

const Template: ComponentStory<typeof MenuContainer> = (args) => (
    <MenuContainer {...args} />
)

export const Default = Template.bind({})
Default.args = {}
