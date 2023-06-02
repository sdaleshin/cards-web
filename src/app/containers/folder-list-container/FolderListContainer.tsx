import { FolderList } from '../../components/folder/folder-list/FolderList'
import { useGetFoldersQuery } from '../../redux/api/folder/folder.api'
import { FolderListSkeleton } from '../../components/folder/folder-list/FolderListSkeleton'
import { useNavigate } from 'react-router'
import { IFolderListItem } from '../../components/folder/folder-list/FolderListItem'
import { getFolderEditUrl } from '../../utils/urls'

export const FolderListContainer = () => {
    const { isLoading, isError, error, data: folders } = useGetFoldersQuery()
    const navigate = useNavigate()

    if (isLoading) {
        return <FolderListSkeleton />
    }

    const handleFolderClick = (folder: IFolderListItem) =>
        navigate(getFolderEditUrl(folder.id))

    const handleCreateNewFolderClick = () => navigate(getFolderEditUrl('new'))

    return (
        <FolderList
            folders={folders}
            onFolderClick={handleFolderClick}
            onCreateNewFolderClick={handleCreateNewFolderClick}
        />
    )
}
