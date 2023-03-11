import { SyntheticEvent } from 'react'
import styled from 'styled-components'
import { Colors } from '../../../styles/colors'

const StyledInput = styled.input`
    outline: none;
    padding: 0 24px;
    width: 100%;
    height: 51px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    border: 1px solid #e2e2e4;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-sizing: border-box;

    color: ${Colors.Gray30};
`

export const Input = ({
    value,
    placeholder,
    onChange,
}: {
    value: string
    placeholder?: string
    onChange: (value: string) => void
}) => {
    const handleChange = (e: SyntheticEvent<HTMLInputElement>) =>
        onChange(e.currentTarget.value)
    return (
        <StyledInput
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    )
}
