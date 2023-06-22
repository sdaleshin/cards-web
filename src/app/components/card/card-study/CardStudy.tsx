import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { CardDTO } from '../../../redux/api/card/card.api.types'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import { Colors } from '../../../styles/colors'
import { Explanation } from '../../explanation/Explanation'

const ContainerDiv = styled.div``
const TitleDiv = styled.div<{ answerShown: boolean; height: number }>`
    width: 100%;
    aspect-ratio: 3/2;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${Colors.Gray90};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    height: ${(p) =>
        p.answerShown ? '80px' : p.height ? p.height + 'px' : 'auto'};
    transition: ${(p) => (p.answerShown ? '0.3s ease-out' : 'none')};
    cursor: pointer;
    z-index: 2;
    position: relative;
    background: ${Colors.White};
`
const TitleTypography = styled(Typography)`
    font-weight: 500;
    color: ${Colors.Blue50};
`

const ExplanationContainer = styled.div<{ answerShown: boolean }>`
    width: 100%;
    position: absolute;
    border-radius: 8px;
    border: 1px solid ${Colors.Gray90};
    background: ${Colors.White};
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
    padding: 40px;
    box-sizing: border-box;
    z-index: 1;
    transition: ${(p) => (p.answerShown ? '0.3s ease-out' : 'none')};
    opacity: ${(p) => (p.answerShown ? '1' : '0')};
    margin-top: ${(p) => (p.answerShown ? '88px' : '0')};
`

export const CardStudy = ({
    card,
    className,
}: {
    card: CardDTO
    className?: string
}) => {
    const [answerShown, setAnswerShown] = useState(false)
    const [titleHeight, setTitleHeight] = useState()

    const titleRef = useRef(null)

    useEffect(() => {
        if (titleRef.current) {
            setTitleHeight(titleRef.current.clientHeight)
        }
    }, [])
    useEffect(() => {
        setAnswerShown(false)
    }, [card])
    return (
        <ContainerDiv className={className}>
            <ExplanationContainer answerShown={answerShown}>
                <Explanation type={card.type} data={card.explanation} />
            </ExplanationContainer>
            <TitleDiv
                height={titleHeight}
                ref={titleRef}
                answerShown={answerShown}
                onClick={() => setAnswerShown(true)}
            >
                <TitleTypography type={TypographyType.Subtitle}>
                    {card.title}
                </TitleTypography>
            </TitleDiv>
        </ContainerDiv>
    )
}
