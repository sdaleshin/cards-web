import { ReactElement } from 'react'
import styled from 'styled-components'
import { Typography, TypographyType } from '../typography/Typography'

const ContainerButton = styled.button`
    width: 102px;
    height: 36px;
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;
`

export const Button = ({
    text,
    icon,
    onClick,
}: {
    text: string
    icon?: ReactElement
    onClick?: () => void
}) => {
    return (
        <ContainerButton onClick={onClick}>
            <Typography type={TypographyType.ButtonText}>{text}</Typography>
            {icon}
        </ContainerButton>
    )
}
