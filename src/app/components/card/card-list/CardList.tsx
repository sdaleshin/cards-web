import { CardListItem } from './CardListItem'
import { CardDTO } from '../../../redux/api/card/card.api.types'

export const CardList = ({ cards }: { cards: CardDTO[] }) => {
    return (
        <>
            {cards.map((card) => (
                <CardListItem card={card} key={card.id} />
            ))}
        </>
    )
}
