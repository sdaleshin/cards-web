import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FolderList } from './FolderList'

export default {
    title: 'Components/FolderList',
    component: FolderList,
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
} as ComponentMeta<typeof FolderList>

const Template: ComponentStory<typeof FolderList> = (args) => (
    <FolderList {...args} />
)

export const Default = Template.bind({})
Default.args = {
    folders: [
        { id: 'id1', name: 'Default', updatedAt: '2023-05-18T19:02:09.189Z' },
        {
            id: 'id2',
            name: 'Basic group',
            updatedAt: '2023-05-18T19:02:09.189Z',
        },
        {
            id: 'id3',
            name: 'shakespeare',
            updatedAt: '2023-05-18T19:02:09.189Z',
        },
        {
            id: 'id4',
            name: 'Winnie the Pooh',
            updatedAt: '2023-05-18T19:02:09.189Z',
        },
        {
            id: 'id5',
            name: 'Harry Potter',
            updatedAt: '2023-05-18T19:02:09.189Z',
        },
        {
            id: 'id6',
            name: 'PMBOK 1996',
            updatedAt: '2023-05-18T19:02:09.189Z',
        },
        { id: 'id7', name: 'Ulysses', updatedAt: '2023-05-18T19:02:09.189Z' },
        {
            id: 'id8',
            name: 'iBook group 20 Feb 2023',
            updatedAt: '2023-05-18T19:02:09.189Z',
        },
    ],
}
