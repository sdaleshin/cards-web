import { ITranslationData } from '../../../types/translation.types'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import { FreeDictionaryMeaning } from '../../../redux/api/free-dictionary/free-dictionary.api.types'
import styled from 'styled-components'

const MeaningContainerDiv = styled.div`
    & + & {
        margin-top: 4px;
    }
`

export const TranslationCardBodyFreeDic = ({
    explanation,
}: ITranslationData) => {
    const meaning = explanation as FreeDictionaryMeaning
    return (
        <>
            {meaning.definitions.map((definition, index) => (
                <MeaningContainerDiv key={index}>
                    <Typography type={TypographyType.Body}>
                        {definition.definition}
                    </Typography>
                </MeaningContainerDiv>
            ))}
        </>
    )
}
