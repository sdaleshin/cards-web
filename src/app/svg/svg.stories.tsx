import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AddInCircleSvg } from './AddInCircleSvg'
import styled from 'styled-components'
import {
    Typography,
    TypographyType,
} from '../components/basic/typography/Typography'
import { CheckInCircleSvg } from './CheckInCircleSvg'
import { CrossInCircleSvg } from './CrossInCircleSvg'

const StyledAddInCircleSvg = styled(AddInCircleSvg)`
    path {
        fill: black;
    }
    rect {
        stroke: black;
    }
`

const StyledCheckInCircleSvg = styled(CheckInCircleSvg)`
    path {
        fill: black;
    }
    rect {
        stroke: black;
    }
`

const StyledCrossInCircleSvg = styled(CrossInCircleSvg)`
    path {
        stroke: black;
    }
    rect {
        stroke: black;
    }
`

const RowDiv = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    & + & {
        margin-left: 40px;
    }
`

const ContainerDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    margin: 20px;
`

const AllSvgOnPage = () => {
    return (
        <ContainerDiv>
            <RowDiv>
                <Typography type={TypographyType.Body}>
                    AddInCircleSvg
                </Typography>
                <StyledAddInCircleSvg />
            </RowDiv>
            <RowDiv>
                <Typography type={TypographyType.Body}>
                    CheckInCircleSvg
                </Typography>
                <StyledCheckInCircleSvg />
            </RowDiv>
            <RowDiv>
                <Typography type={TypographyType.Body}>
                    CrossInCircleSvg
                </Typography>
                <StyledCrossInCircleSvg />
            </RowDiv>
        </ContainerDiv>
    )
}

export default {
    title: 'Svg',
    component: AllSvgOnPage,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof AllSvgOnPage>

const Template: ComponentStory<typeof AllSvgOnPage> = (args) => (
    <AllSvgOnPage {...args} />
)

export const Default = Template.bind({})
