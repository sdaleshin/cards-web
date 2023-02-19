import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FolderList } from './FolderList'

export default {
    title: 'Components/FolderList',
    component: FolderList,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof FolderList>

const Template: ComponentStory<typeof FolderList> = (args) => (
    <FolderList {...args} />
)

export const Default = Template.bind({})
Default.args = {
    folders: [{ id: 'aaa', title: 'bbb' }],
}
