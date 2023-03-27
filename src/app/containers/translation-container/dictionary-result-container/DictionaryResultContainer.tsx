import { useSelector } from 'react-redux'
import { selectTranslationWord } from '../../../redux/translation/translation.slice'
import { useGetTranslationFromDictionaryQuery } from '../../../redux/api/dictionary/dictionary.api'
import { DictionaryDefinitionCard } from '../../../components/translation/dictionary/dictionary-definition-card/DictionaryDefinitionCard'

export const DictionaryResultContainer = () => {
    const word = useSelector(selectTranslationWord)
    const {
        isLoading,
        isError,
        error,
        data: definitions,
    } = useGetTranslationFromDictionaryQuery(word, {
        skip: word === '',
    })

    if (definitions && definitions.length) {
        return (
            <>
                {definitions.map((definition) => (
                    <DictionaryDefinitionCard
                        definition={definition}
                        word={word}
                        key={definition.synsetOffset}
                    />
                ))}
            </>
        )
    }
    return null
}
