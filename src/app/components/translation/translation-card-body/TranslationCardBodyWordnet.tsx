import { Typography, TypographyType } from '../../basic/typography/Typography'
import { ITranslationData } from '../../../types/translation.types'
import { Definition } from '../../../redux/api/dictionary/dictionary.api.types'

export const TranslationCardBodyWordnet = ({
    explanation,
}: ITranslationData) => {
    const definition = explanation as Definition
    return (
        <Typography type={TypographyType.Body}>{definition.gloss}</Typography>
    )
}
