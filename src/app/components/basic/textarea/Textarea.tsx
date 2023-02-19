import { SyntheticEvent } from 'react'
import styled from 'styled-components'
import { Label } from '../label/Label'

const StyledLabel = styled(Label)`
    margin-bottom: 16px;
`

const StyledContainer = styled.div`
    border: 1px solid #e2e2e4;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 520px;
    height: 160px;
    box-sizing: border-box;
    padding: 24px;
`

const StyledTextarea = styled.textarea`
    border: none;
    outline: none;
    resize: none;
    padding: 0;
    width: 100%;
    height: calc(100% - 30px);

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    /* Gray/Gray30 */

    color: #3a3940;
`

export const Textarea = ({
    value,
    label,
    onChange,
}: {
    value: string
    label: string
    onChange: (value: string) => void
}) => {
    const handleChange = (e: SyntheticEvent<HTMLTextAreaElement>) =>
        onChange(e.currentTarget.value)
    return (
        <StyledContainer>
            <StyledLabel text={label} />
            <StyledTextarea value={value} onChange={handleChange} />
        </StyledContainer>
    )
}
