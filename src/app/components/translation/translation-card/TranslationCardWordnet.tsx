import { TranslationCard } from './TranslationCard'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import { Definition } from '../../../redux/api/dictionary/dictionary.api.types'

export const TranslationCardWordnet = ({
    definition,
    word,
    onClick,
    currentFolderName,
    added,
}: {
    definition: Definition
    word: string
    onClick: (definition: Definition) => void
    currentFolderName: string
    added: boolean
}) => {
    return (
        <TranslationCard
            word={word}
            partOfSpeech={definition.pos}
            explanation={
                <Typography type={TypographyType.Body}>
                    {definition.gloss}
                </Typography>
            }
            currentFolderName={currentFolderName}
            onClick={() => onClick(definition)}
            added={added}
        />
    )
}
