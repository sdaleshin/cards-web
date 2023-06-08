import styled from 'styled-components'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import { Colors } from '../../../styles/colors'
import { CardDTO } from '../../../redux/api/card/card.api.types'
import { Explanation } from '../../explanation/Explanation'
import { Divider } from '../../divider/Divider'
import { skeletonOnDemand } from '../../../styles/skeletonOnDemand'
import { getPartOfSpeech } from '../../../utils/getPartOfSpeech'

const CardTitleTypography = styled(Typography)`
    display: block;
`

const PartOfSpeechTypography = styled(Typography)`
    margin-left: 8px;
    color: ${Colors.Gray70};
`

const ContainerDiv = styled.div`
    ${skeletonOnDemand};
    padding: 40px;
    background: ${Colors.White};
    border: 1px solid ${Colors.Gray90};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 16px 0;
    &:last-child {
        margin-bottom: 0;
    }
`

const TitleRowDiv = styled.div`
    display: flex;
    align-items: center;
`

export const CardListItem = ({
    card,
    skeleton = false,
}: {
    card: CardDTO
    skeleton?: boolean
}) => {
    return (
        <ContainerDiv skeleton={skeleton}>
            <div>
                <TitleRowDiv>
                    <CardTitleTypography type={TypographyType.Subtitle}>
                        {card.title}
                    </CardTitleTypography>
                    <PartOfSpeechTypography type={TypographyType.Body}>
                        {getPartOfSpeech(card.explanation, card.type)}
                    </PartOfSpeechTypography>
                </TitleRowDiv>
                <Divider />
                <div>
                    <Explanation data={card.explanation} type={card.type} />
                </div>
            </div>
        </ContainerDiv>
    )
}
