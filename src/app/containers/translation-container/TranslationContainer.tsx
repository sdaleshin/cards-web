import { TranslationInputContainer } from './translation-input-container/TranslationInputContainer'
import { FreeDictionaryResultContainer } from './free-dictionary-result-container/FreeDictionaryResultContainer'
import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import { DictionaryResultContainer } from './dictionary-result-container/DictionaryResultContainer'

enum DicType {
    FreeDictionary,
    Dictionary,
}

const RadioContainerDiv = styled.div`
    padding: 16px 0;
    font-family: 'Inter', serif;
`

const RadioInput = styled.input`
    & + & {
        margin-left: 16px;
    }
    font-family: 'Inter', serif;
    cursor: pointer;
`

export const TranslationContainer = () => {
    const [dicType, setDicType] = useState(DicType.Dictionary)

    const handleDicTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDicType(+event.target.value)
    }

    return (
        <>
            <TranslationInputContainer />
            <RadioContainerDiv onChange={handleDicTypeChange}>
                <RadioInput
                    type="radio"
                    value={DicType.FreeDictionary}
                    name="gender"
                />{' '}
                FreeDictionary
                <RadioInput
                    type="radio"
                    value={DicType.Dictionary}
                    name="gender"
                    defaultChecked={true}
                />{' '}
                WordNet
            </RadioContainerDiv>
            {dicType === DicType.FreeDictionary && (
                <FreeDictionaryResultContainer />
            )}
            {dicType === DicType.Dictionary && <DictionaryResultContainer />}
        </>
    )
}
