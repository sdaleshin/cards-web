import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from './Layout'

export default {
    title: 'Components/Layout',
    component: Layout,
    parameters: {
        layout: 'fullscreen',
        viewport: {
            viewports: {
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
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = () => (
    <Layout header={<div>header</div>} sidebar={<div>sidebar</div>}>
        children
    </Layout>
)

export const Default = Template.bind({})
Default.args = {}
