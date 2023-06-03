import styled from 'styled-components'
import { Colors } from '../../../styles/colors'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import moment from 'moment'
import { FolderListItemTemplate } from './FolderListItemTemplate'
import {
    ISkeletonable,
    skeletonOnDemand,
} from '../../../styles/skeletonOnDemand'
import { FolderDTO } from '../../../redux/api/folder/folder.api.types'
import { getFolderLastUpdatedAt } from '../../../redux/folder/folder.slice'

export interface IFolderListItem extends FolderDTO {
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
    folder: FolderDTO
    skeleton?: boolean
    onClick?: (folder: FolderDTO) => void
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
                    {folder.cardsCount}{' '}
                    {folder.cardsCount > 1 ? 'cards' : 'card'}
                </InfoTypography>
                <InfoTypography type={TypographyType.BodySmall}>
                    ·
                </InfoTypography>
                <InfoTypography type={TypographyType.BodySmall}>
                    Updated {moment(getFolderLastUpdatedAt(folder)).fromNow()}
                </InfoTypography>
            </InfoContainerDiv>
        </StyledFolderListItemTemplate>
    )
}
