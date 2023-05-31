import { WordnetDefinition } from '../../redux/api/dictionary/dictionary.api.types'
import { Typography, TypographyType } from '../basic/typography/Typography'
import styled from 'styled-components'
import { Colors } from '../../styles/colors'
import { Divider } from '../divider/Divider'

const SynonymsTypography = styled(Typography)`
    color: ${Colors.Gold};
    display: block;
    margin-bottom: 8px;
`

const GlossTypography = styled(Typography)`
    color: ${Colors.Gray40};
    display: block;
`

const ExamplesTypography = styled(Typography)`
    color: ${Colors.GoldLight};
    display: block;
    font-style: italic;
    & + & {
        margin-top: 4px;
    }
`

export const ExplanationWordnet = ({ data }: { data: WordnetDefinition }) => {
    return (
        <>
            <SynonymsTypography type={TypographyType.BodyLarge}>
                {data.synonyms
                    .map((s) => s.split('_').join('\u00A0'))
                    .join(', ')}
            </SynonymsTypography>
            <GlossTypography type={TypographyType.Body}>
                {data.def}
            </GlossTypography>
            <Divider />
            {data.exp.map((s, index) => (
                <ExamplesTypography type={TypographyType.Body} key={index}>
                    {'· ' + s}
                </ExamplesTypography>
            ))}
        </>
    )
}
