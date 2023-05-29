import { WordnetDefinition } from '../../redux/api/dictionary/dictionary.api.types'
import { Typography, TypographyType } from '../basic/typography/Typography'

export const ExplanationWordnet = ({ data }: { data: WordnetDefinition }) => {
    return <Typography type={TypographyType.Body}>{data.gloss}</Typography>
}
