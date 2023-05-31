import { useGetCardsByFolderIdQuery } from '../../redux/api/card/card.api'
import { CardList } from '../../components/card/card-list/CardList'
import { useSelector } from 'react-redux'
import { selectCurrentFolderId } from '../../redux/folder/folder.slice'
import isNil from 'lodash/isNil'
import { CardListSkeleton } from '../../components/card/card-list/CardListSkeleton'

export const CardListContainer = () => {
    const currentFolderId = useSelector(selectCurrentFolderId)
    const { isLoading, data: cards } = useGetCardsByFolderIdQuery(
        currentFolderId,
        {
            skip: isNil(currentFolderId),
        },
    )

    if (isLoading || !currentFolderId) {
        return <CardListSkeleton />
    }

    return <CardList cards={cards} />
}
