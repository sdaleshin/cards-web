import { useGetCardsQuery } from '../../redux/api/card/card.api'
import { CardList } from '../../components/card/card-list/CardList'

export const CardListContainer = () => {
    const { isLoading, isError, error, data: cards } = useGetCardsQuery()

    if (isLoading) {
        return null
    }

    return <CardList cards={cards} />
}
