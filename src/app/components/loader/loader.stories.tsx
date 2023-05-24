import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Loader } from './Loader'

export default {
    title: 'Components/Loader',
    component: Loader,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = () => <Loader />

export const Default = Template.bind({})
Default.args = {}
