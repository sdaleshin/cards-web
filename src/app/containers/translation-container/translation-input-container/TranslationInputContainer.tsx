import { TranslationInput } from '../../../components/translation/translation-input/TranslationInput'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectSearchInput,
    setSearchInputValue,
} from '../../../redux/translation/translation.slice'

export const TranslationInputContainer = () => {
    const value = useSelector(selectSearchInput)
    const dispatch = useDispatch()
    const handleChange = (value: string) => {
        dispatch(setSearchInputValue(value))
    }
    return <TranslationInput value={value} onChange={handleChange} />
}
