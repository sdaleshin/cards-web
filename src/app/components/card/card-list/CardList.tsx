import { CardListItem, ICardItem } from './CardListItem'
import styled from 'styled-components'

const ContainerDiv = styled.div`
    flex-wrap: wrap;
    display: flex;
`

export const CardList = ({ cards }: { cards: ICardItem[] }) => {
    return (
        <ContainerDiv>
            {cards.map((card) => (
                <CardListItem card={card} key={card.id} />
            ))}
        </ContainerDiv>
    )
}
