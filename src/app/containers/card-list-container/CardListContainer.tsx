import { useGetCardsByFolderIdQuery } from '../../redux/api/card/card.api'
import { CardList } from '../../components/card/card-list/CardList'
import { useSelector } from 'react-redux'
import { selectCurrentFolderId } from '../../redux/folder/folder.slice'

export const CardListContainer = () => {
    const currentFolderId = useSelector(selectCurrentFolderId)
    const { isLoading, data: cards } =
        useGetCardsByFolderIdQuery(currentFolderId)

    if (isLoading) {
        return null
    }

    return <CardList cards={cards} />
}
