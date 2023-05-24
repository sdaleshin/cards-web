import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FolderListSkeleton } from './FolderListSkeleton'

export default {
    title: 'Components/FolderListSkeleton',
    component: FolderListSkeleton,
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
} as ComponentMeta<typeof FolderListSkeleton>

const Template: ComponentStory<typeof FolderListSkeleton> = (args) => (
    <FolderListSkeleton {...args} />
)

export const Default = Template.bind({})
Default.args = {}
