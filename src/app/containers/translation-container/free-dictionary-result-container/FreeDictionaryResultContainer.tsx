import { useSelector } from 'react-redux'
import { selectTranslationWord } from '../../../redux/translation/translation.slice'
import { useGetTranslationFromFreeDictionaryQuery } from '../../../redux/api/free-dictionary/free-dictionary.api'
import { TranslationCardFreeDic } from '../../../components/translation/translation-card/TranslationCardFreeDic'

export const FreeDictionaryResultContainer = () => {
    const word = useSelector(selectTranslationWord)
    const { isLoading, isError, error, data } =
        useGetTranslationFromFreeDictionaryQuery(word, {
            skip: word === '',
        })
    if (data) {
        return (
            <>
                {data.meanings.map((meaning) => (
                    <TranslationCardFreeDic
                        meaning={meaning}
                        word={data.word}
                        key={meaning.partOfSpeech}
                        onClick={() => {}}
                    />
                ))}
            </>
        )
    }
    return null
}
