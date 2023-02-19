import { TranslationInput } from '../../components/translation/translation-input/TranslationInput'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectSearchInput,
    setSearchInput,
} from '../../redux/translation/translation.slice'
import { useGetTranslationQuery } from '../../redux/api/dictionary/dictionary.api'
import { useDebouncedValue } from '../../hooks/useDebouncedValue'
import { TranslationCard } from '../../components/translation/translation-card/TranslationCard'
import styled from 'styled-components'
import { Label } from '../../components/basic/label/Label'

const ContainerDiv = styled.div`
    display: flex;
`

const LeftColumn = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
    margin: 36px;
`

const RightColumn = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    margin: 36px;
`

const ResultContainer = styled.div`
    border: 1px solid #e2e2e4;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    min-width: 520px;
    padding: 24px;
`

const StyledLabel = styled(Label)`
    margin-bottom: 16px;
`

export const TranslationContainer = () => {
    const value = useSelector(selectSearchInput)
    const debouncedValue = useDebouncedValue(value, 500)
    const { isLoading, isError, error, data } = useGetTranslationQuery(
        debouncedValue,
        { skip: debouncedValue === '' },
    )
    const dispatch = useDispatch()
    const handleChange = (value: string) => {
        dispatch(setSearchInput(value))
    }
    return (
        <ContainerDiv>
            <LeftColumn>
                <TranslationInput value={value} onChange={handleChange} />
            </LeftColumn>
            <RightColumn>
                <ResultContainer>
                    <StyledLabel text="Translation" />
                    {!!data && !!data[0] && (
                        <TranslationCard translation={data[0]} />
                    )}
                </ResultContainer>
            </RightColumn>
        </ContainerDiv>
    )
}
