import styled from 'styled-components'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import { Colors } from '../../../styles/colors'
import { gridSizes } from '../../../styles/grid'
import { onlyDesktop } from '../../../styles/breakpoints'

export interface ICardItem {
    id: number
    title: string
    explanation: string
    folderId: number
}

const ContainerDiv = styled.div`
    border: 1px solid ${Colors.Gray90};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 40px;
    margin-bottom: 24px;
    box-sizing: border-box;
    ${onlyDesktop} {
        margin-right: 24px;
    }

    ${gridSizes({
        width: {
            mobile: {
                columns: 4,
                gutters: 3,
            },
            tablet: {
                columns: 4,
                gutters: 3,
            },
            desktop: {
                columns: 4,
                gutters: 3,
            },
        },
    })}
`

export const CardListItem = ({ card }: { card: ICardItem }) => {
    return (
        <ContainerDiv>
            <div>
                <Typography type={TypographyType.BodyLarge}>
                    {card.title}
                </Typography>
            </div>
            {/*<div>*/}
            {/*    <Typography type={TypographyType.H3}>*/}
            {/*        {card.explanation}*/}
            {/*    </Typography>*/}
            {/*</div>*/}
        </ContainerDiv>
    )
}
