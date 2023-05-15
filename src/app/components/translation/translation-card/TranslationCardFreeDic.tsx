import { TranslationCard } from './TranslationCard'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import { FreeDictionaryMeaning } from '../../../redux/api/free-dictionary/free-dictionary.api.types'
import styled from 'styled-components'

const MeaningContainerDiv = styled.div`
    & + & {
        margin-top: 4px;
    }
`

export const TranslationCardFreeDic = ({
    word,
    meaning,
    onClick,
    currentFolderName,
    added,
}: {
    meaning: FreeDictionaryMeaning
    word: string
    onClick: (meaning: FreeDictionaryMeaning) => void
    currentFolderName: string
    added: boolean
}) => {
    return (
        <TranslationCard
            word={word}
            partOfSpeech={meaning.partOfSpeech}
            explanation={
                <>
                    {meaning.definitions.map((definition, index) => (
                        <MeaningContainerDiv key={index}>
                            <Typography type={TypographyType.Body}>
                                {definition.definition}
                            </Typography>
                        </MeaningContainerDiv>
                    ))}
                </>
            }
            onClick={() => onClick(meaning)}
            currentFolderName={currentFolderName}
            added={added}
        />
    )
}
