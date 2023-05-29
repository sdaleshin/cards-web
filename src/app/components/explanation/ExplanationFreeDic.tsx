import { Typography, TypographyType } from '../basic/typography/Typography'
import { FreeDictionaryMeaning } from '../../redux/api/free-dictionary/free-dictionary.api.types'
import styled from 'styled-components'

const DefinitionContainerDiv = styled.div`
    & + & {
        margin-top: 4px;
    }
`

export const ExplanationFreeDic = ({
    data,
}: {
    data: FreeDictionaryMeaning
}) => {
    return (
        <>
            {data.definitions.map((definition, index) => (
                <DefinitionContainerDiv key={index}>
                    <Typography type={TypographyType.Body}>
                        {definition.definition}
                    </Typography>
                </DefinitionContainerDiv>
            ))}
        </>
    )
}
