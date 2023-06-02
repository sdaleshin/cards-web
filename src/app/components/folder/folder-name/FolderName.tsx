import styled from 'styled-components'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import { Button } from '../../basic/button/Button'
import { EditSvg } from '../../../svg/EditSvg'
import React, { useEffect, useState } from 'react'
import { Input } from '../../basic/input/Input'

const ContainerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NameTypography = styled(Typography)`
    display: block;
`

export const FolderName = ({
    name = '',
    inEditMode = false,
    className,
    onEditClick,
    onSaveClick,
    onCancelClick,
}: {
    name?: string
    inEditMode?: boolean
    className?: string
    onEditClick?: () => void
    onSaveClick?: (name: string) => void
    onCancelClick?: () => void
}) => {
    const [inputFolderName, setInputFolderName] = useState(name)
    useEffect(() => {
        setInputFolderName(name)
    }, [name, inEditMode])
    return (
        <ContainerDiv className={className}>
            {!inEditMode && (
                <>
                    <NameTypography type={TypographyType.Subtitle}>
                        {name}
                    </NameTypography>
                    <Button
                        text="Edit"
                        icon={<EditSvg />}
                        onClick={onEditClick}
                    />
                </>
            )}
            {inEditMode && (
                <>
                    <Input
                        value={inputFolderName}
                        onChange={setInputFolderName}
                        placeholder={'Enter new folder name'}
                    />
                    <Button
                        text="Save"
                        onClick={() => onSaveClick(inputFolderName)}
                    />
                    <Button text="Cancel" onClick={onCancelClick} />
                </>
            )}
        </ContainerDiv>
    )
}
