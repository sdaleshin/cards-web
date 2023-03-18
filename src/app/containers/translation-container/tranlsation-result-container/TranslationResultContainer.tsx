import { useDispatch, useSelector } from 'react-redux'
import { selectTranslationWord } from '../../../redux/translation/translation.slice'
import { useGetTranslationQuery } from '../../../redux/api/dictionary/dictionary.api'
import { MeaningCard } from '../../../components/translation/meaning-card/MeaningCard'
import { useEffect } from 'react'
import { createCardInCurrentFolder } from '../../../redux/card/card.slice'

export const TranslationResultContainer = () => {
    const word = useSelector(selectTranslationWord)
    const { isLoading, isError, error, data } = useGetTranslationQuery(word, {
        skip: word === '',
    })
    const dispatch = useDispatch()
    useEffect(() => {
        //TODO: not the best solution
        if (data?.word) {
            dispatch(createCardInCurrentFolder(data?.word))
        }
    }, [data?.word])
    if (data) {
        return (
            <>
                {data.meanings.map((meaning) => (
                    <MeaningCard
                        meaning={meaning}
                        word={data.word}
                        key={meaning.partOfSpeech}
                    />
                ))}
            </>
        )
    }
    return null
}
