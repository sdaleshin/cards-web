import { FolderListItem, IFolderListItem } from './FolderListItem'
import styled from 'styled-components'
import { FolderListItemTemplate } from './FolderListItemTemplate'
import { Typography, TypographyType } from '../../basic/typography/Typography'
import { Colors } from '../../../styles/colors'
import { FolderDTO } from '../../../redux/api/folder/folder.api.types'

const ContainerDiv = styled.div`
    flex-wrap: wrap;
    display: flex;
`

const CreateFolderListItemTemplate = styled(FolderListItemTemplate)`
    border-color: ${Colors.Blue60};
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0;
`
const CreateNewFolderTypography = styled(Typography)`
    color: ${Colors.Blue60};
`
export const FolderList = ({
    folders,
    onCreateNewFolderClick,
    onFolderClick,
}: {
    folders: FolderDTO[]
    onCreateNewFolderClick: () => void
    onFolderClick: (folder: IFolderListItem) => void
}) => {
    return (
        <ContainerDiv>
            {folders.map((folder) => (
                <FolderListItem
                    key={folder.id}
                    folder={folder}
                    onClick={onFolderClick}
                />
            ))}
            <CreateFolderListItemTemplate onClick={onCreateNewFolderClick}>
                <CreateNewFolderTypography type={TypographyType.BodyLarge}>
                    + Create new group
                </CreateNewFolderTypography>
            </CreateFolderListItemTemplate>
        </ContainerDiv>
    )
}
