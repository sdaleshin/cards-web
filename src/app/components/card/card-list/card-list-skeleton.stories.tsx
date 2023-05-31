import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CardListSkeleton } from './CardListSkeleton'

export default {
    title: 'Components/CardListSkeleton',
    component: CardListSkeleton,
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
} as ComponentMeta<typeof CardListSkeleton>

const Template: ComponentStory<typeof CardListSkeleton> = (args) => (
    <CardListSkeleton {...args} />
)

export const Default = Template.bind({})
Default.args = {}
