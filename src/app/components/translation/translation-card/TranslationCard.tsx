import { DictionaryTranslation } from '../../../redux/api/dictionary/dictionary.api.types'
import styled from 'styled-components'
import { Typography, TypographyType } from '../../basic/typography/Typography'

const MeaningDiv = styled.div`
    padding: 16px 0;
`

export const TranslationCard = ({
    translation,
}: {
    translation: DictionaryTranslation
}) => {
    return (
        <div>
            <div>
                <Typography type={TypographyType.BodyLarge}>
                    {'Found: ' + translation.word}
                </Typography>
            </div>
            <div>
                {translation.meanings.map((meaning, index) => (
                    <MeaningDiv key={index}>
                        <div>
                            <Typography type={TypographyType.BodySmall}>
                                {meaning.partOfSpeech}
                            </Typography>
                        </div>
                        <div>
                            {meaning.definitions.map((definition, index) => (
                                <div key={index}>
                                    <Typography type={TypographyType.Body}>
                                        {definition.definition}
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    </MeaningDiv>
                ))}
            </div>
        </div>
    )
}
