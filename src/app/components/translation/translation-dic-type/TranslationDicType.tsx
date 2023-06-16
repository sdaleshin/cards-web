import styled from 'styled-components'
import { ChangeEvent } from 'react'
import { ExplanationTypeEnum } from '../../../types/explanation.types'

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
    dicType: ExplanationTypeEnum
    onChange: (dicType: ExplanationTypeEnum) => void
}) => {
    const handleDicTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value as ExplanationTypeEnum)
    }

    return (
        <RadioContainerDiv onChange={handleDicTypeChange}>
            <RadioInput
                type="radio"
                value={ExplanationTypeEnum.FreeDictionary}
                name="gender"
                checked={dicType === ExplanationTypeEnum.FreeDictionary}
            />{' '}
            FreeDictionary
            <RadioInput
                type="radio"
                value={ExplanationTypeEnum.Wordnet}
                name="gender"
                checked={dicType === ExplanationTypeEnum.Wordnet}
            />{' '}
            WordNet
            <RadioInput
                type="radio"
                value={ExplanationTypeEnum.GPT}
                name="gender"
                checked={dicType === ExplanationTypeEnum.GPT}
            />{' '}
            Chat GPT
        </RadioContainerDiv>
    )
}
