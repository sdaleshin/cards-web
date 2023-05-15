import styled, { StyledComponent } from 'styled-components'
import { createElement, ReactNode } from 'react'
import { Colors } from '../../../styles/colors'

export enum TypographyType {
    H1 = 'H1',
    H2 = 'H2',
    H3 = 'H3',
    Subtitle = 'SUBTITLE',
    BodyLarge = 'BODY_LARGE',
    Body = 'BODY',
    BodySmall = 'BODY_SMALL',
    PreTitle = 'PRE_TITLE',
    ButtonText = 'BUTTON_TEXT',
    Link = 'LINK',
}

const H1 = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;

    /* Blue/Blue40 */

    color: #1a4d99;
`
const H2 = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.02em;

    /* Blue/Blue40 */

    color: #1a4d99;
`

const H3 = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    letter-spacing: -0.02em;

    /* Blue/Blue40 */

    color: #1a4d99;
`

const Subtitle = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;

    color: ${Colors.Gray30};
`

const BodyLarge = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    /* Gray/Gray60 */

    color: #6c6b73;
`

const Body = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    /* or 22px */

    /* Gray/Gray60 */

    color: #6c6b73;
`

const BodySmall = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    /* Gray/Gray60 */

    color: #6c6b73;
`

const PreTitle = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    letter-spacing: 0.03em;
    text-transform: uppercase;

    /* Blue/Blue40 */

    color: #1a4d99;
`

const ButtonText = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    /* or 22px */

    letter-spacing: 0.03em;
    text-transform: capitalize;

    /* Blue/Blue40 */

    color: #1a4d99;
`

const Link = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    text-decoration-line: underline;

    /* Red/Red60 */

    color: #db5353;
`

const TypographyTypeComponentMap: {
    [P in TypographyType]: StyledComponent<any, any>
} = {
    [TypographyType.H1]: H1,
    [TypographyType.H2]: H2,
    [TypographyType.H3]: H3,
    [TypographyType.Subtitle]: Subtitle,
    [TypographyType.BodyLarge]: BodyLarge,
    [TypographyType.Body]: Body,
    [TypographyType.BodySmall]: BodySmall,
    [TypographyType.PreTitle]: PreTitle,
    [TypographyType.ButtonText]: ButtonText,
    [TypographyType.Link]: Link,
}

export const Typography = ({
    className,
    children,
    type,
}: {
    className?: string
    children: ReactNode
    type: TypographyType
}) =>
    createElement(TypographyTypeComponentMap[type], {
        className,
        children,
    })
