import { TranslationInput } from '../../components/translation/translation-input/TranslationInput'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectSearchInput,
    setSearchInput,
} from '../../redux/translation/translation.slice'
import { useGetTranslationQuery } from '../../redux/api/dictionary/dictionary.api'
import { useDebouncedValue } from '../../hooks/useDebouncedValue'
import { TranslationCard } from '../../components/translation/translation-card/TranslationCard'
import { useEffect } from 'react'
import { useAddCardMutation } from '../../redux/api/card/card.api'
import { selectCurrentFolderId } from '../../redux/folder/folder.slice'

export const TranslationContainer = () => {
    const value = useSelector(selectSearchInput)
    const currentFolderId = useSelector(selectCurrentFolderId)
    const debouncedValue = useDebouncedValue(value, 500)
    const { isLoading, isError, error, data } = useGetTranslationQuery(
        debouncedValue,
        { skip: debouncedValue === '' },
    )

    const [addCard] = useAddCardMutation()
    const dispatch = useDispatch()
    const handleChange = (value: string) => {
        dispatch(setSearchInput(value))
    }
    useEffect(() => {
        if (data && data[0] && data[0].word && currentFolderId) {
            addCard({ title: data[0].word, folderId: currentFolderId })
        }
    }, [data, currentFolderId])
    return (
        <>
            <TranslationInput value={value} onChange={handleChange} />
            {!!data && !!data[0] && <TranslationCard translation={data[0]} />}
        </>
    )
}
