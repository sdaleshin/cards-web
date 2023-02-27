import styled from 'styled-components'
import { Typography, TypographyType } from '../../basic/typography/Typography'

export interface ICardItem {
    id: number
    title: string
    explanation: string
    folderId: number
}

const StyledDiv = styled.div`
    border: 1px solid #e2e2e4;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 24px;
    width: 500px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardListItem = ({ card }: { card: ICardItem }) => {
    return (
        <StyledDiv>
            <div>
                <Typography type={TypographyType.H2}>{card.title}</Typography>
            </div>
            <div>
                <Typography type={TypographyType.H3}>
                    {card.explanation}
                </Typography>
            </div>
        </StyledDiv>
    )
}
