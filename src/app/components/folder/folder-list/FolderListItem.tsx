import styled from 'styled-components'
import { Colors } from '../../../styles/colors'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import moment from 'moment'
import { FolderListItemTemplate } from './FolderListItemTemplate'
import {
    ISkeletonable,
    skeletonOnDemand,
} from '../../../styles/skeletonOnDemand'

export interface IFolderListItem {
    id: string
    name: string
    cardsCount: number
    updatedAt: string
}

const NameTypography = styled(Typography)`
    color: ${Colors.Gray30};
    display: block;
    margin-bottom: 16px;
`
const InfoContainerDiv = styled.div`
    display: flex;
`

const InfoTypography = styled(Typography)`
    display: block;
    margin-right: 8px;
`

const StyledFolderListItemTemplate = styled(
    FolderListItemTemplate,
)<ISkeletonable>`
    ${skeletonOnDemand}
`

export const FolderListItem = ({
    folder,
    skeleton = false,
    onClick,
}: {
    folder: IFolderListItem
    skeleton?: boolean
    onClick?: (folder: IFolderListItem) => void
}) => {
    return (
        <StyledFolderListItemTemplate
            onClick={() => onClick(folder)}
            skeleton={skeleton}
        >
            <NameTypography type={TypographyType.BodyLarge}>
                {folder.name}
            </NameTypography>
            <InfoContainerDiv>
                <InfoTypography type={TypographyType.BodySmall}>
                    12 cards
                </InfoTypography>
                <InfoTypography type={TypographyType.BodySmall}>
                    ·
                </InfoTypography>
                <InfoTypography type={TypographyType.BodySmall}>
                    Updated {moment(folder.updatedAt).fromNow()}
                </InfoTypography>
            </InfoContainerDiv>
        </StyledFolderListItemTemplate>
    )
}
