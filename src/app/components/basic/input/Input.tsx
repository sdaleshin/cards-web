import { SyntheticEvent } from 'react'
import styled from 'styled-components'
import { Colors } from '../../../styles/colors'
import { Typography, TypographyType } from '../typography/Typography'

const ContainerDiv = styled.div``

const StyledInput = styled.input<{ error: boolean }>`
    outline: none;
    padding: 0 24px;
    width: 100%;
    height: 51px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    border: 1px solid ${(p) => (p.error ? Colors.Red60 : Colors.Gray90)};
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-sizing: border-box;

    color: ${Colors.Gray30};
`
const ErrorTypography = styled(Typography)`
    color: ${Colors.Red60};
    position: absolute;
    display: block;
`

export const Input = ({
    value,
    placeholder,
    onChange,
    errorMessage,
    className,
}: {
    value: string
    placeholder?: string
    onChange: (value: string) => void
    errorMessage?: string
    className?: string
}) => {
    const handleChange = (e: SyntheticEvent<HTMLInputElement>) =>
        onChange(e.currentTarget.value)
    return (
        <ContainerDiv className={className}>
            <StyledInput
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                error={!!errorMessage}
            />
            {!!errorMessage && (
                <ErrorTypography type={TypographyType.BodySmall}>
                    {errorMessage}
                </ErrorTypography>
            )}
        </ContainerDiv>
    )
}
