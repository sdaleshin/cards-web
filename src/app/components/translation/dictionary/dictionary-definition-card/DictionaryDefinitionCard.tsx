import { Definition } from '../../../../redux/api/dictionary/dictionary.api.types'
import {
    Typography,
    TypographyType,
} from '../../../basic/typography/Typography'
import styled from 'styled-components'
import { Colors } from '../../../../styles/colors'

const ContainerDiv = styled.div`
    padding: 40px;
    background: ${Colors.White};

    border: 1px solid ${Colors.Gray90};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 16px 0;
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

export const DictionaryDefinitionCard = ({
    definition,
    word,
}: {
    definition: Definition
    word: string
}) => {
    return (
        <ContainerDiv>
            <div>
                <Typography type={TypographyType.Subtitle}>{word}</Typography>
                <PartOfSpeechTypography type={TypographyType.Body}>
                    {definition.pos}
                </PartOfSpeechTypography>
            </div>
            <DividerDiv />
            <div>
                <Typography type={TypographyType.Body}>
                    {definition.gloss}
                </Typography>
            </div>
        </ContainerDiv>
    )
}
