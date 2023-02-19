import { FolderListItem, IFolderListItem } from './FolderListItem'

export const FolderList = ({ folders }: { folders: IFolderListItem[] }) => {
    return (
        <div>
            {folders.map((folder) => (
                <FolderListItem key={folder.id} folder={folder} />
            ))}
        </div>
    )
}
