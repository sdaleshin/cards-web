import { CardsBigSvg } from '../../../svg/CardsBigSvg'
import styled from 'styled-components'
import { Typography, TypographyType } from '../../basic/typography/Typography'

const ContainerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 56px;
`

const StyledCardsBigSvg = styled(CardsBigSvg)`
    margin-bottom: 40px;
`

const NoCardsTypography = styled(Typography)`
    display: block;
`

export const CardsEmptyList = () => {
    return (
        <ContainerDiv>
            <StyledCardsBigSvg />
            <NoCardsTypography type={TypographyType.BodyLarge}>
                No cards yet
            </NoCardsTypography>
        </ContainerDiv>
    )
}
