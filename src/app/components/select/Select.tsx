import { Typography, TypographyType } from '../basic/typography/Typography'
import styled from 'styled-components'
import { useRef, useState } from 'react'
import { SelectOption } from './SelectOption'
import { Colors } from '../../styles/colors'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { onlyMobileAndTablet } from '../../styles/breakpoints'

export interface ISelectOption {
    id: number
    name: string
}

const RowDiv = styled.div<{ fullWidthOnMobile: boolean }>`
    display: flex;
    height: 48px;
    align-items: center;
    cursor: pointer;
    ${(p) =>
        p.fullWidthOnMobile
            ? `
        ${onlyMobileAndTablet} {
            width: 100vw;
            justify-content: center;
        }
    `
            : ``}
`

const ContainerDiv = styled.div<{ fullWidthOnMobile: boolean }>`
    display: inline;
    ${(p) =>
        p.fullWidthOnMobile
            ? `
        ${onlyMobileAndTablet} {
            position: absolute;
            width: 100vw;
            display: block;
            background: ${Colors.White}
        }
    `
            : ``}
`

const StyledSvg = styled.svg`
    margin-left: 8px;
    padding-right: 16px;
`

const OptionsContainerDiv = styled.div<{ fullWidthOnMobile: boolean }>`
    position: absolute;
    background: ${Colors.White};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    margin-top: 8px;
    //width: 390px;
    max-height: 400px;
    padding: 12px 0;

    ${(p) =>
        p.fullWidthOnMobile
            ? `
        ${onlyMobileAndTablet} {
            width: 100vw;
            margin-top: 0;
            box-shadow: none;
        }
    `
            : ``}
`

const SelectedOptionTypography = styled(Typography)`
    padding-left: 16px;
    color: ${Colors.Gray10};
`

export const Select = ({
    options,
    selectedOption,
    onChange,
    fullWidthOnMobile = false,
    className,
}: {
    options: ISelectOption[]
    selectedOption?: ISelectOption
    onChange: (option: ISelectOption) => void
    fullWidthOnMobile?: boolean
    className?: string
}) => {
    const [optionsShown, setOptionsShown] = useState(false)
    const ref = useRef()

    const handleTriggerClick = () => {
        setOptionsShown(!optionsShown)
    }

    const handleOptionClick = (option: ISelectOption) => {
        setOptionsShown(false)
        onChange(option)
    }

    useOnClickOutside(ref, () => setOptionsShown(false))

    return (
        <ContainerDiv
            ref={ref}
            fullWidthOnMobile={fullWidthOnMobile}
            className={className}
        >
            <RowDiv
                onClick={handleTriggerClick}
                fullWidthOnMobile={fullWidthOnMobile}
            >
                <SelectedOptionTypography type={TypographyType.Body}>
                    {selectedOption?.name ?? 'Choose'}
                </SelectedOptionTypography>
                <StyledSvg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.52851 5.52827C3.78886 5.26792 4.21097 5.26792 4.47132 5.52827L7.99992 9.05687L11.5285 5.52827C11.7889 5.26792 12.211 5.26792 12.4713 5.52827C12.7317 5.78862 12.7317 6.21073 12.4713 6.47108L8.47132 10.4711C8.21097 10.7314 7.78886 10.7314 7.52851 10.4711L3.52851 6.47108C3.26816 6.21073 3.26816 5.78862 3.52851 5.52827Z"
                        fill="#3A3940"
                    />
                </StyledSvg>
            </RowDiv>
            {optionsShown && (
                <OptionsContainerDiv fullWidthOnMobile={fullWidthOnMobile}>
                    {options.map((option) => (
                        <SelectOption
                            key={option.id}
                            option={option}
                            onClick={handleOptionClick}
                        />
                    ))}
                </OptionsContainerDiv>
            )}
        </ContainerDiv>
    )
}
