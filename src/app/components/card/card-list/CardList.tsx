import { CardListItem, ICardItem } from './CardListItem'

export const CardList = ({ cards }: { cards: ICardItem[] }) => {
    return (
        <div>
            {cards.map((card) => (
                <CardListItem card={card} />
            ))}
        </div>
    )
}
