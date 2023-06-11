import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

export default {
    title: 'Components/ProgressBar',
    component: ProgressBar,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof ProgressBar>

const Template: ComponentStory<typeof ProgressBar> = (args) => (
    <ProgressBar {...args} />
)

export const Default = Template.bind({})
Default.args = {
    current: 1,
    count: 24,
}
