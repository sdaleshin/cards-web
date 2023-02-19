import styled from 'styled-components'

const StyledDiv = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;

    letter-spacing: 0.03em;
    text-transform: uppercase;

    color: #5191f0;
`

export const Label = ({
    text,
    className,
}: {
    text: string
    className?: string
}) => {
    return <StyledDiv className={className}>{text}</StyledDiv>
}
