import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Typography, TypographyType } from '../basic/typography/Typography'
import styled from 'styled-components'
import { Colors } from '../../styles/colors'

export interface IMenuItem {
    name: string
    icon: ReactElement
    link: string
}

const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`

const IconContainer = styled.div`
    margin-right: 8px;
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.li`
    list-style-type: none;
    width: 100%;
    padding-left: 24px;
    height: 40px;
    display: flex;
    align-items: center;
`

const StyledName = styled(Typography)`
    color: ${Colors.Gray80};
`

export const MenuItem = ({ item }: { item: IMenuItem }) => {
    return (
        <Container>
            <StyledLink to={item.link}>
                <IconContainer>{item.icon}</IconContainer>
                <StyledName type={TypographyType.Body}>{item.name}</StyledName>
            </StyledLink>
        </Container>
    )
}
