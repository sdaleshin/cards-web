import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { Typography, TypographyType } from '../basic/typography/Typography'
import styled from 'styled-components'
import { Colors } from '../../styles/colors'
import { SvgType } from '../../svg/svg.types'
import { onlyDesktop } from '../../styles/breakpoints'

export interface IMenuItem {
    name: string
    IconComponent: FunctionComponent<SvgType>
    link: string
}

const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 24px;

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

const StyledIcon = styled.svg<{ $active: boolean }>`
    path {
        fill: ${(p) => (p.$active ? Colors.Gray90 : Colors.Gray80)};
    }
`

const StyledName = styled(Typography)<{ $active: boolean }>`
    color: ${(p) => (p.$active ? Colors.Gray90 : Colors.Gray80)};
`

const ContainerLi = styled.li`
    list-style-type: none;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;

    ${onlyDesktop} {
        &:hover {
            background: ${Colors.Gray30};
            ${StyledIcon} {
                path {
                    fill: ${Colors.Gray90};
                }
            }
            ${StyledName} {
                color: ${Colors.Gray90};
            }
        }
    }
`

export const MenuItem = ({
    item,
    active = false,
}: {
    item: IMenuItem
    active?: boolean
}) => {
    return (
        <ContainerLi>
            <StyledLink to={item.link}>
                <IconContainer>
                    <StyledIcon as={item.IconComponent} $active={active} />
                </IconContainer>
                <StyledName type={TypographyType.Body} $active={active}>
                    {item.name}
                </StyledName>
            </StyledLink>
        </ContainerLi>
    )
}
