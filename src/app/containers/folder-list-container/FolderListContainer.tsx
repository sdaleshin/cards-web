import { FolderList } from '../../components/folder/folder-list/FolderList'
import { useGetFoldersQuery } from '../../redux/api/folder/folder.api'

export const FolderListContainer = () => {
    const { isLoading, isError, error, data: folders } = useGetFoldersQuery()

    if (isLoading) {
        return null
    }

    return (
        <FolderList
            folders={[
                { id: 'id1', title: 'title1' },
                { id: 'id2', title: 'title2' },
            ]}
        />
    )
}
