import { ReactElement } from 'react'
import styled from 'styled-components'
import { Typography, TypographyType } from '../typography/Typography'
import { Colors } from '../../../styles/colors'

export enum ButtonColorEnum {
    Red = 'red',
    Black = 'black',
    Yellow = 'yellow',
    Blue = 'blue',
    Gray = 'gray',
}

export enum ButtonVariantEnum {
    Filled = 'filled',
    Outlined = 'outlined',
    Text = 'text',
}

export enum ButtonSizeEnum {
    Regular = 'regular',
    Small = 'small',
}

const getBackgroundColor = (color: ButtonColorEnum) => {
    switch (color) {
        case ButtonColorEnum.Red:
            return Colors.Red60
        case ButtonColorEnum.Black:
            return Colors.Gray30
        case ButtonColorEnum.Blue:
            return Colors.Blue60
        case ButtonColorEnum.Yellow:
            return Colors.Yellow60
        case ButtonColorEnum.Gray:
            return Colors.Gray60
    }
}

const getHoverBackgroundColor = (color: ButtonColorEnum) => {
    switch (color) {
        case ButtonColorEnum.Red:
            return Colors.Red50
        case ButtonColorEnum.Black:
            return Colors.Gray20
        case ButtonColorEnum.Blue:
            return Colors.Blue50
        case ButtonColorEnum.Yellow:
            return Colors.Yellow50
        case ButtonColorEnum.Gray:
            return Colors.Gray50
    }
}

const getPressedBackgroundColor = (color: ButtonColorEnum) => {
    switch (color) {
        case ButtonColorEnum.Red:
            return Colors.Red40
        case ButtonColorEnum.Black:
            return Colors.Gray10
        case ButtonColorEnum.Blue:
            return Colors.Blue40
        case ButtonColorEnum.Yellow:
            return Colors.Yellow50
        case ButtonColorEnum.Gray:
            return Colors.Gray40
    }
}

const getTextColor = (variant: ButtonVariantEnum, color: ButtonColorEnum) => {
    if (color === ButtonColorEnum.Yellow) {
        return Colors.Gray40
    }
    if (variant === ButtonVariantEnum.Filled) {
        return Colors.White
    }
    return getBackgroundColor(color)
}

const getHoverTextColor = (
    variant: ButtonVariantEnum,
    color: ButtonColorEnum,
) => {
    if (color === ButtonColorEnum.Yellow) {
        return Colors.Gray30
    }
    if (variant === ButtonVariantEnum.Filled) {
        return Colors.White
    }
    return getHoverBackgroundColor(color)
}

const getPressedTextColor = (
    variant: ButtonVariantEnum,
    color: ButtonColorEnum,
) => {
    if (color === ButtonColorEnum.Yellow) {
        return Colors.Gray20
    }
    if (variant === ButtonVariantEnum.Filled) {
        return Colors.White
    }
    return getPressedBackgroundColor(color)
}

const TextTypography = styled(Typography)<{
    color: ButtonColorEnum
    variant: ButtonVariantEnum
}>`
    color: ${(p) => getTextColor(p.variant, p.color)};
`

const ContainerButton = styled.button<{
    hasIcon: boolean
    color: ButtonColorEnum
    size: ButtonSizeEnum
    variant: ButtonVariantEnum
}>`
    width: ${(p) => (p.size === ButtonSizeEnum.Regular ? '156px' : '144px')};
    height: ${(p) => (p.size === ButtonSizeEnum.Regular ? '48px' : '36px')};
    padding: 0 18px;
    display: flex;
    justify-content: ${(p) => (p.hasIcon ? 'space-between' : 'center')};
    align-items: center;
    cursor: pointer;
    border-radius: 4px;
    background: ${(p) =>
        p.variant === ButtonVariantEnum.Filled
            ? getBackgroundColor(p.color)
            : 'transparent'};
    border: ${(p) =>
        p.variant === ButtonVariantEnum.Filled ||
        p.variant === ButtonVariantEnum.Outlined
            ? `1px solid ${getBackgroundColor(p.color)}`
            : 'none'};

    &:hover {
        background: ${(p) =>
            p.variant === ButtonVariantEnum.Filled
                ? getHoverBackgroundColor(p.color)
                : 'transparent'};
        border: ${(p) =>
            p.variant === ButtonVariantEnum.Filled ||
            p.variant === ButtonVariantEnum.Outlined
                ? `1px solid ${getHoverBackgroundColor(p.color)}`
                : 'none'};
        ${TextTypography} {
            color: ${(p) => getHoverTextColor(p.variant, p.color)};
        }
    }

    &:active {
        background: ${(p) =>
            p.variant === ButtonVariantEnum.Filled
                ? getPressedBackgroundColor(p.color)
                : 'transparent'};
        border: ${(p) =>
            p.variant === ButtonVariantEnum.Filled ||
            p.variant === ButtonVariantEnum.Outlined
                ? `1px solid ${getPressedBackgroundColor(p.color)}`
                : 'none'};
        ${TextTypography} {
            color: ${(p) => getPressedTextColor(p.variant, p.color)};
        }
    }
`

export const Button = ({
    text,
    icon,
    color,
    variant,
    size,
    onClick,
    className,
}: {
    text: string
    color: ButtonColorEnum
    variant: ButtonVariantEnum
    size: ButtonSizeEnum
    icon?: ReactElement
    onClick?: () => void
    className?: string
}) => {
    return (
        <ContainerButton
            onClick={onClick}
            hasIcon={!!icon}
            color={color}
            variant={variant}
            size={size}
            className={className}
        >
            <TextTypography
                type={TypographyType.ButtonText}
                color={color}
                variant={variant}
            >
                {text}
            </TextTypography>
            {icon}
        </ContainerButton>
    )
}
