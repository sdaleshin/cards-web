import styled from 'styled-components'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import { Colors } from '../../../styles/colors'
import { ITranslationData } from '../../../types/translation.types'
import { Explanation } from '../../explanation/Explanation'
import { ExplanationTypeEnum } from '../../../types/explanation.types'
import { AddInCircleSvg } from '../../../svg/AddInCircleSvg'
import { onlyDesktop } from '../../../styles/breakpoints'
import { CheckInCircleSvg } from '../../../svg/CheckInCircleSvg'
import { MinusInCircleSvg } from '../../../svg/MinusInCircleSvg'
import React from 'react'

const AddIcon = styled(AddInCircleSvg)`
    path {
        fill: ${Colors.Blue80};
    }
    rect {
        stroke: ${Colors.Blue80};
    }
`

const MinusIcon = styled(MinusInCircleSvg)`
    display: none;
`

const AddedIcon = styled(CheckInCircleSvg)`
    path {
        fill: ${Colors.White};
    }
    rect {
        fill: ${Colors.Blue80};
    }
    ${onlyDesktop} {
        path {
            fill: ${Colors.Blue80};
        }
        rect {
            stroke: ${Colors.Blue80};
            fill: ${Colors.White};
        }
    }
`

const ContainerDiv = styled.div<{ added: boolean }>`
    padding: 40px 32px 40px 40px;
    background: ${Colors.White};
    border: 1px solid ${(p) => (p.added ? Colors.Blue60 : Colors.Gray90)};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 16px 0;
    cursor: pointer;

    ${onlyDesktop} {
        &:hover {
            ${AddIcon} {
                path {
                    fill: ${Colors.White};
                }
                rect {
                    fill: ${Colors.Blue80};
                }
            }
            ${AddedIcon} {
                display: none;
            }
            ${MinusIcon} {
                display: block;
            }
        }
    }
`

const PartOfSpeechTypography = styled(Typography)`
    margin-left: 8px;
    color: ${Colors.Gray70};
`

const DividerDiv = styled.div`
    width: 32px;
    border-bottom: 1px solid ${Colors.Gray90};
    margin: 16px 0;
`

const IconContainerDiv = styled.div`
    height: 32px;
    display: flex;
    width: 32px;
    align-items: center;
    justify-content: center;
    margin-bottom: -3px;
`

const BodyContainerDiv = styled.div``

const RowDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

const TitleContainerDiv = styled.div``

export const TranslationCard = ({
    word,
    partOfSpeech,
    explanation,
    onClick,
    added = false,
    type,
    hash,
}: ITranslationData & {
    onClick: (data: ITranslationData) => void
    added: boolean
    currentFolderName: string
    type: ExplanationTypeEnum
}) => {
    return (
        <ContainerDiv
            added={added}
            onClick={() =>
                onClick({
                    word,
                    explanation: explanation,
                    partOfSpeech,
                    added,
                    hash,
                })
            }
        >
            <RowDiv>
                <TitleContainerDiv>
                    <Typography type={TypographyType.Subtitle}>
                        {word}
                    </Typography>
                    <PartOfSpeechTypography type={TypographyType.Body}>
                        {partOfSpeech}
                    </PartOfSpeechTypography>
                </TitleContainerDiv>
                <IconContainerDiv>
                    {!added && <AddIcon />}
                    {added && <AddedIcon />}
                    {added && <MinusIcon />}
                </IconContainerDiv>
            </RowDiv>
            <DividerDiv />
            <BodyContainerDiv>
                <Explanation data={explanation} type={type} />
            </BodyContainerDiv>
        </ContainerDiv>
    )
}
