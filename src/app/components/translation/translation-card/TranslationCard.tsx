import styled from 'styled-components'
import { ReactNode, useState } from 'react'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import { Colors } from '../../../styles/colors'
import {
    TranslationCardStatus,
    TranslationCardStatusEnum,
} from '../translation-card-status/TranslationCardStatus'

const StyledTranslationCardStatus = styled(TranslationCardStatus)`
    position: absolute;
    margin-left: -40px;
    margin-top: -28px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    width: calc(100% - 38px);
`

const ContainerDiv = styled.div`
    position: relative;
    padding: 40px;
    background: ${Colors.White};

    border: 1px solid ${Colors.Gray90};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 16px 0;
    cursor: pointer;

    &:hover {
        border: 2px solid ${Colors.Red60};
        padding: 39px;
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

const ExplanationContainerDiv = styled.div``

const StatusRowDiv = styled.div`
    display: flex;
    align-items: center;
`

const StatusTypography = styled(Typography)`
    color: ${Colors.White};
    display: block;
    margin-left: 14px;
`

export const TranslationCard = ({
    explanation,
    word,
    partOfSpeech,
    onClick,
    added = false,
    currentFolderName,
}: {
    explanation: ReactNode
    word: string
    partOfSpeech: string
    onClick: () => void
    added: boolean
    currentFolderName: string
}) => {
    const [hovered, setHovered] = useState(false)
    return (
        <ContainerDiv
            onClick={onClick}
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
            <ExplanationContainerDiv>{explanation}</ExplanationContainerDiv>
            {hovered && !added && (
                <StyledTranslationCardStatus
                    status={TranslationCardStatusEnum.Add}
                >
                    <StatusRowDiv>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 6.66675C12.3682 6.66675 12.6667 6.96522 12.6667 7.33341V11.3334H16.6667C17.0348 11.3334 17.3333 11.6319 17.3333 12.0001C17.3333 12.3683 17.0348 12.6667 16.6667 12.6667H12.6667V16.6667C12.6667 17.0349 12.3682 17.3334 12 17.3334C11.6318 17.3334 11.3333 17.0349 11.3333 16.6667V12.6667H7.33332C6.96513 12.6667 6.66666 12.3683 6.66666 12.0001C6.66666 11.6319 6.96513 11.3334 7.33332 11.3334H11.3333V7.33341C11.3333 6.96522 11.6318 6.66675 12 6.66675Z"
                                fill="white"
                            />
                            <rect
                                x="0.75"
                                y="0.75"
                                width="22.5"
                                height="22.5"
                                rx="11.25"
                                stroke="white"
                                strokeWidth="1.5"
                            />
                        </svg>
                        <StatusTypography type={TypographyType.BodyLarge}>
                            Add to {currentFolderName}
                        </StatusTypography>
                    </StatusRowDiv>
                </StyledTranslationCardStatus>
            )}
            {!hovered && added && (
                <StyledTranslationCardStatus
                    status={TranslationCardStatusEnum.Added}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.8047 7.52851C18.0651 7.78886 18.0651 8.21097 17.8047 8.47132L10.4714 15.8047C10.2111 16.065 9.78894 16.065 9.5286 15.8047L6.19526 12.4713C5.93491 12.211 5.93491 11.7889 6.19526 11.5285C6.45561 11.2682 6.87772 11.2682 7.13807 11.5285L10 14.3904L16.8619 7.52851C17.1223 7.26816 17.5444 7.26816 17.8047 7.52851Z"
                            fill="white"
                        />
                        <rect
                            x="0.75"
                            y="0.75"
                            width="22.5"
                            height="22.5"
                            rx="11.25"
                            stroke="white"
                            strokeWidth="1.5"
                        />
                    </svg>
                    <StatusTypography type={TypographyType.BodyLarge}>
                        Added to {currentFolderName}
                    </StatusTypography>
                </StyledTranslationCardStatus>
            )}
            {hovered && added && (
                <StyledTranslationCardStatus
                    status={TranslationCardStatusEnum.Delete}
                >
                    test
                </StyledTranslationCardStatus>
            )}
        </ContainerDiv>
    )
}
