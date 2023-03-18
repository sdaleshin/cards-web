import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LoginWithGoogle } from './LoginWithGoogle'
import { Provider } from 'react-redux'
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '../../redux/auth/auth.slice'

const MockedState: AuthState = {
    jwtToken: null,
    userInfo: null,
}

const Mockstore = ({
    initialState,
    children,
}: {
    initialState: AuthState
    children: any
}) => (
    <Provider
        store={configureStore({
            reducer: {
                auth: createSlice({
                    name: 'auth',
                    initialState,
                    reducers: {
                        setJwtToken: (state, action: PayloadAction<string>) => {
                            state.jwtToken = action.payload
                        },
                    },
                }).reducer,
            },
        })}
    >
        {children}
    </Provider>
)

export default {
    title: 'Containers/LoginWithGoogle',
    component: LoginWithGoogle,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof LoginWithGoogle>

const Template: ComponentStory<typeof LoginWithGoogle> = (args) => (
    <LoginWithGoogle {...args} />
)

export const Default = Template.bind({})
Default.decorators = [
    (story: any) => <Mockstore initialState={MockedState}>{story()}</Mockstore>,
]
Default.args = {}
