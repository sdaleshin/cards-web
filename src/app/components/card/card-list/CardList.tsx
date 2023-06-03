import { CardListItem } from './CardListItem'
import { CardDTO } from '../../../redux/api/card/card.api.types'
import isEmpty from 'lodash/isEmpty'
import { CardsEmptyList } from './CardsEmptyList'

export const CardList = ({ cards }: { cards: CardDTO[] }) => {
    return (
        <>
            {isEmpty(cards) ? (
                <CardsEmptyList />
            ) : (
                cards.map((card) => <CardListItem card={card} key={card.id} />)
            )}
        </>
    )
}
