import { useGetCardsByFolderIdQuery } from '../../redux/api/card/card.api'
import { CardList } from '../../components/card/card-list/CardList'
import { useSelector } from 'react-redux'
import { selectCurrentFolderId } from '../../redux/folder/folder.slice'
import isNil from 'lodash/isNil'
import { CardListSkeleton } from '../../components/card/card-list/CardListSkeleton'

export const CardListContainer = ({ folderId }: { folderId?: string }) => {
    const currentFolderId = useSelector(selectCurrentFolderId)
    if (!folderId) {
        folderId = currentFolderId
    }
    const { isLoading, data: cards } = useGetCardsByFolderIdQuery(folderId, {
        skip: isNil(folderId),
    })

    if (isLoading || !folderId) {
        return <CardListSkeleton />
    }

    return <CardList cards={cards} />
}
