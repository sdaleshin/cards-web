import styled, { css } from 'styled-components'
import { ReactNode } from 'react'
import { Colors } from '../../../styles/colors'
import { AddInCircleSvg } from '../../../svg/AddInCircleSvg'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import { CheckInCircleSvg } from '../../../svg/CheckInCircleSvg'
import { CrossInCircleSvg } from '../../../svg/CrossInCircleSvg'

export enum TranslationCardStatusEnum {
    Add,
    Added,
    Delete,
}

export const getColorByTranslationCardStatusEnum = (
    status: TranslationCardStatusEnum,
) => {
    if (status === TranslationCardStatusEnum.Add) {
        return Colors.Red60
    } else if (status === TranslationCardStatusEnum.Added) {
        return Colors.Blue60
    } else if (status === TranslationCardStatusEnum.Delete) {
        return Colors.Gray60
    }
}

const ContainerDiv = styled.div<{ status: TranslationCardStatusEnum }>`
    height: 68px;
    width: 100%;
    color: ${Colors.White};
    display: flex;
    align-items: center;
    padding-left: 40px;
    ${(p) => css`
        background: ${getColorByTranslationCardStatusEnum(p.status)};
    `}
`

const StatusRowDiv = styled.div`
    display: flex;
    align-items: center;
`

const StatusTypography = styled(Typography)`
    color: ${Colors.White};
    display: block;
    margin-left: 14px;
`

export const TranslationCardStatus = ({
    status,
    className,
    currentFolderName,
}: {
    status: TranslationCardStatusEnum
    className?: string
    currentFolderName: string
}) => {
    return (
        <ContainerDiv status={status} className={className}>
            <StatusRowDiv>
                {status === TranslationCardStatusEnum.Add && (
                    <>
                        <AddInCircleSvg />
                        <StatusTypography type={TypographyType.BodyLarge}>
                            Add to {currentFolderName}
                        </StatusTypography>
                    </>
                )}
                {status === TranslationCardStatusEnum.Added && (
                    <>
                        <CheckInCircleSvg />
                        <StatusTypography type={TypographyType.BodyLarge}>
                            Added to {currentFolderName}
                        </StatusTypography>
                    </>
                )}
                {status === TranslationCardStatusEnum.Delete && (
                    <>
                        <CrossInCircleSvg />
                        <StatusTypography type={TypographyType.BodyLarge}>
                            Delete from {currentFolderName}
                        </StatusTypography>
                    </>
                )}
            </StatusRowDiv>
        </ContainerDiv>
    )
}
