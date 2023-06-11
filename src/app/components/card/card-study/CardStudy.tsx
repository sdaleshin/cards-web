import { useState } from 'react'
import styled from 'styled-components'
import { CardDTO } from '../../../redux/api/card/card.api.types'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import { Colors } from '../../../styles/colors'

const ContainerDiv = styled.div``
const TitleDiv = styled.div`
    width: 100%;
    aspect-ratio: 3/2;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${Colors.Gray90};
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`
const TitleTypography = styled(Typography)`
    font-weight: 500;
    color: ${Colors.Blue50};
`

export const CardStudy = ({
    card,
    className,
}: {
    card: CardDTO
    className?: string
}) => {
    const [answerShown, setAnswerShown] = useState(false)
    return (
        <ContainerDiv className={className}>
            <TitleDiv>
                <TitleTypography type={TypographyType.Subtitle}>
                    {card.title}
                </TitleTypography>
            </TitleDiv>
        </ContainerDiv>
    )
}
