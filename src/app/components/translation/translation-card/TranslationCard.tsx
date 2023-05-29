import styled from 'styled-components'
import { FunctionComponent, useState } from 'react'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import { Colors } from '../../../styles/colors'
import {
    getColorByTranslationCardStatusEnum,
    TranslationCardStatus,
    TranslationCardStatusEnum,
} from '../translation-card-status/TranslationCardStatus'
import { ITranslationData } from '../../../types/translation.types'
import { Explanation } from '../../explanation/Explanation'
import { ExplanationTypeEnum } from '../../../types/explanation.types'

const StyledTranslationCardStatus = styled(TranslationCardStatus)`
    position: absolute;
    margin-left: -40px;
    margin-top: -28px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    width: calc(100% - 38px);
`

const ContainerDiv = styled.div<{ borderColor: string; borderWidth: number }>`
    position: relative;
    padding: ${(p) => 41 - p.borderWidth}px;
    background: ${Colors.White};
    border: ${(p) => p.borderWidth}px solid ${(p) => p.borderColor};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 16px 0;
    cursor: pointer;
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

const BodyContainerDiv = styled.div``

const getTranslationCardStatus = (added: boolean, hovered: boolean) => {
    if (hovered && !added) {
        return TranslationCardStatusEnum.Add
    } else if (!hovered && added) {
        return TranslationCardStatusEnum.Added
    } else if (hovered && added) {
        return TranslationCardStatusEnum.Delete
    } else {
        return undefined
    }
}

export const TranslationCard = ({
    word,
    partOfSpeech,
    explanation,
    onClick,
    added = false,
    currentFolderName,
    type,
}: ITranslationData & {
    onClick: (data: ITranslationData) => void
    added: boolean
    currentFolderName: string
    type: ExplanationTypeEnum
}) => {
    const [hovered, setHovered] = useState(false)
    const translationCardStatus = getTranslationCardStatus(added, hovered)
    const borderColor =
        translationCardStatus === undefined
            ? Colors.Gray90
            : getColorByTranslationCardStatusEnum(translationCardStatus)
    const borderWidth = translationCardStatus === undefined ? 1 : 2
    return (
        <ContainerDiv
            borderColor={borderColor}
            borderWidth={borderWidth}
            onClick={() =>
                onClick({ word, explanation: explanation, partOfSpeech })
            }
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div>
                <Typography type={TypographyType.Subtitle}>{word}</Typography>
                <PartOfSpeechTypography type={TypographyType.Body}>
                    {partOfSpeech}
                </PartOfSpeechTypography>
            </div>
            <DividerDiv />
            <BodyContainerDiv>
                <Explanation data={explanation} type={type} />
            </BodyContainerDiv>
            {translationCardStatus !== undefined && (
                <StyledTranslationCardStatus
                    status={translationCardStatus}
                    currentFolderName={currentFolderName}
                />
            )}
        </ContainerDiv>
    )
}
