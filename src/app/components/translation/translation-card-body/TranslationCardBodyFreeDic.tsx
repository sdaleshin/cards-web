import { ITranslationData } from '../../../types/translation'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import { FreeDictionaryMeaning } from '../../../redux/api/free-dictionary/free-dictionary.api.types'
import styled from 'styled-components'

const MeaningContainerDiv = styled.div`
    & + & {
        margin-top: 4px;
    }
`

export const TranslationCardBodyFreeDic = ({ rawData }: ITranslationData) => {
    const meaning = rawData as FreeDictionaryMeaning
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
