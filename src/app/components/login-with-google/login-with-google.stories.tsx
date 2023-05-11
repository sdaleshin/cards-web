import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LoginWithGoogle } from './LoginWithGoogle'

export default {
    title: 'Components/LoginWithGoogle',
    component: LoginWithGoogle,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof LoginWithGoogle>

const Template: ComponentStory<typeof LoginWithGoogle> = () => (
    <LoginWithGoogle
        onSuccessResponseFromGoogle={() =>
            console.log('received response from google')
        }
    />
)

export const Default = Template.bind({})
Default.args = {}
