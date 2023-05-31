import styled from 'styled-components'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import { Colors } from '../../../styles/colors'
import { CardDTO } from '../../../redux/api/card/card.api.types'
import { Explanation } from '../../explanation/Explanation'
import { Divider } from '../../divider/Divider'
import { skeletonOnDemand } from '../../../styles/skeletonOnDemand'

const CardTitleTypography = styled(Typography)`
    display: block;
`

const ContainerDiv = styled.div`
    ${skeletonOnDemand}
    position: relative;
    padding: 40px;
    background: ${Colors.White};
    border: 1px solid ${Colors.Gray90};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 16px 0;
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
                <CardTitleTypography type={TypographyType.Subtitle}>
                    {card.title}
                </CardTitleTypography>
                <Divider />
                <div>
                    <Explanation data={card.explanation} type={card.type} />
                </div>
            </div>
        </ContainerDiv>
    )
}
