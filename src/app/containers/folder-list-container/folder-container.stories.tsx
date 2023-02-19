import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FolderListContainer } from './FolderListContainer'

export default {
    title: 'Containers/FolderListContainer',
    component: FolderListContainer,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof FolderListContainer>

const Template: ComponentStory<typeof FolderListContainer> = (args) => (
    <FolderListContainer {...args} />
)

export const Default = Template.bind({})
Default.args = {}
