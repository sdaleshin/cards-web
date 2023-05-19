import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Menu } from './Menu'
import { sidebarMenuItems } from '../../containers/sidebar-container/sidebar-menu-items'
import { getCardsUrl } from '../../utils/urls'
import { MemoryRouter } from 'react-router-dom'
import { Colors } from '../../styles/colors'
import styled from 'styled-components'

const ContainerDiv = styled.div`
    background: ${Colors.Gray10};
`

export default {
    title: 'Components/Menu',
    component: Menu,
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
    decorators: [
        (Story) => (
            <MemoryRouter>
                <ContainerDiv>
                    <Story />
                </ContainerDiv>
            </MemoryRouter>
        ),
    ],
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

export const Default = Template.bind({})
Default.args = {
    items: sidebarMenuItems,
    currentRoute: getCardsUrl(),
}
