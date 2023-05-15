import { useSelector } from 'react-redux'
import { selectTranslationWord } from '../../../redux/translation/translation.slice'
import { useGetTranslationFromDictionaryQuery } from '../../../redux/api/dictionary/dictionary.api'
import { TranslationCardWordnet } from '../../../components/translation/translation-card/TranslationCardWordnet'

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

    const handleClick = () => {}

    if (definitions && definitions.length) {
        return (
            <>
                {definitions.map((definition) => (
                    <TranslationCardWordnet
                        definition={definition}
                        word={word}
                        key={definition.synsetOffset}
                        onClick={handleClick}
                        added={false}
                        currentFolderName={'Current Folder Name'}
                    />
                ))}
            </>
        )
    }
    return null
}
