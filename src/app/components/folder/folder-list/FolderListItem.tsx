export interface IFolderListItem {
    id: string
    title: string
}

export const FolderListItem = ({ folder }: { folder: IFolderListItem }) => {
    return <div>{folder.title}</div>
}
