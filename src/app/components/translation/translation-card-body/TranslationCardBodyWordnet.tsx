import { Typography, TypographyType } from '../../basic/typography/Typography'
import { ITranslationData } from '../../../types/translation'
import { Definition } from '../../../redux/api/dictionary/dictionary.api.types'

export const TranslationCardBodyWordnet = ({ rawData }: ITranslationData) => {
    const definition = rawData as Definition
    return (
        <Typography type={TypographyType.Body}>{definition.gloss}</Typography>
    )
}
