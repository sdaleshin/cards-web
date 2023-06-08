import styled from 'styled-components'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import {
    Button,
    ButtonColorEnum,
    ButtonSizeEnum,
    ButtonVariantEnum,
} from '../../basic/button/Button'
import { EditSvg } from '../../../svg/EditSvg'
import React, { useEffect, useState } from 'react'
import { Input } from '../../basic/input/Input'

const ContainerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NameInput = styled(Input)`
    flex: 1;
`

const NameTypography = styled(Typography)`
    display: block;
`

const ButtonsContainerDiv = styled.div`
    display: flex;
`

const ActionButton = styled(Button)`
    width: 102px;
`

export const FolderName = ({
    name = '',
    inEditMode = false,
    className,
    onEditClick,
    onSaveClick,
    onCancelClick,
    validateFolderName,
}: {
    name?: string
    inEditMode?: boolean
    className?: string
    onEditClick?: () => void
    onSaveClick?: (name: string) => void
    onCancelClick?: () => void
    validateFolderName: (name: string) => string
}) => {
    const [inputFolderName, setInputFolderName] = useState(name)
    const [errorMessage, setErrorMessage] = useState('')
    useEffect(() => {
        setInputFolderName(name)
    }, [name, inEditMode])
    const handleSaveClick = () => {
        const errorMessage = validateFolderName(inputFolderName)
        if (errorMessage) {
            setErrorMessage(errorMessage)
        } else {
            onSaveClick(inputFolderName)
        }
    }
    return (
        <ContainerDiv className={className}>
            {!inEditMode && (
                <>
                    <NameTypography type={TypographyType.Subtitle}>
                        {name}
                    </NameTypography>
                    <ActionButton
                        text="Edit"
                        variant={ButtonVariantEnum.Text}
                        color={ButtonColorEnum.Gray}
                        size={ButtonSizeEnum.Small}
                        icon={<EditSvg />}
                        onClick={onEditClick}
                    />
                </>
            )}
            {inEditMode && (
                <>
                    <NameInput
                        value={inputFolderName}
                        onChange={(value) => {
                            setInputFolderName(value)
                            if (errorMessage) {
                                setErrorMessage('')
                            }
                        }}
                        placeholder={'Enter new folder name'}
                        errorMessage={errorMessage}
                    />
                    <ButtonsContainerDiv>
                        <ActionButton
                            text="Save"
                            variant={ButtonVariantEnum.Text}
                            color={ButtonColorEnum.Gray}
                            size={ButtonSizeEnum.Small}
                            onClick={handleSaveClick}
                        />
                        <ActionButton
                            text="Cancel"
                            onClick={onCancelClick}
                            variant={ButtonVariantEnum.Text}
                            color={ButtonColorEnum.Gray}
                            size={ButtonSizeEnum.Small}
                        />
                    </ButtonsContainerDiv>
                </>
            )}
        </ContainerDiv>
    )
}
