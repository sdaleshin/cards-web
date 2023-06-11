import styled from 'styled-components'
import { Typography, TypographyType } from '../basic/typography/Typography'
import { Colors } from '../../styles/colors'

const ContainerDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

const ProgressContainerDiv = styled.div`
    flex: 1;
`

const ProgressPlaceholderDiv = styled.div`
    background: ${Colors.Gray90};
    height: 8px;
    width: 100%;
    border-radius: 4px;
`

const ProgressCurrentDiv = styled.div<{ current: number; count: number }>`
    background: ${Colors.Red60};
    border-radius: 4px;
    height: 8px;
    width: ${(p) => (100 * p.current) / p.count}%;
    position: relative;
    margin-top: -8px;
`

const ProgressTypography = styled(Typography)`
    display: block;
    width: 53px;
    text-align: right;
`

export const ProgressBar = ({
    current,
    count,
}: {
    current: number
    count: number
}) => {
    return (
        <ContainerDiv>
            <ProgressContainerDiv>
                <ProgressPlaceholderDiv />
                <ProgressCurrentDiv current={current} count={count} />
            </ProgressContainerDiv>
            <ProgressTypography
                type={TypographyType.ButtonText}
            >{`${current}/${count}`}</ProgressTypography>
        </ContainerDiv>
    )
}
