import styled from 'styled-components'
import { ChangeEvent } from 'react'
import { TranslationDicTypeEnum } from '../../../types/translation'

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

export const TranslationDicType = ({
    dicType,
    onChange,
}: {
    dicType: TranslationDicTypeEnum
    onChange: (dicType: TranslationDicTypeEnum) => void
}) => {
    const handleDicTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value as TranslationDicTypeEnum)
    }

    return (
        <RadioContainerDiv onChange={handleDicTypeChange}>
            <RadioInput
                type="radio"
                value={TranslationDicTypeEnum.FreeDictionary}
                name="gender"
                checked={dicType === TranslationDicTypeEnum.FreeDictionary}
            />{' '}
            FreeDictionary
            <RadioInput
                type="radio"
                value={TranslationDicTypeEnum.Wordnet}
                name="gender"
                checked={dicType === TranslationDicTypeEnum.Wordnet}
            />{' '}
            WordNet
        </RadioContainerDiv>
    )
}
