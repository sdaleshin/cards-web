import { ISelectOption } from './Select'
import styled from 'styled-components'
import { Typography, TypographyType } from '../basic/typography/Typography'
import { Colors } from '../../styles/colors'

const OptionTypography = styled(Typography)`
    padding: 12px;
    display: block;
    cursor: pointer;
`

const ContainerDiv = styled.div`
    &:hover ${OptionTypography} {
        color: ${Colors.Gray10};
    }
`

export const SelectOption = ({
    option,
    onClick,
}: {
    option: ISelectOption
    onClick: (option: ISelectOption) => void
}) => {
    return (
        <ContainerDiv onClick={() => onClick(option)}>
            <OptionTypography type={TypographyType.Body}>
                {option.name}
            </OptionTypography>
        </ContainerDiv>
    )
}
