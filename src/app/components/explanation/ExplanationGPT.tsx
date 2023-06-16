import { Typography, TypographyType } from '../basic/typography/Typography'
import styled from 'styled-components'
import { Colors } from '../../styles/colors'

const GlossTypography = styled(Typography)`
    color: ${Colors.Gray40};
    display: block;
`

export const ExplanationGPT = ({ data }: { data: string }) => {
    return <GlossTypography type={TypographyType.Body}>{data}</GlossTypography>
}
