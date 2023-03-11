import { HeaderContainer } from '../../containers/header-container/HeaderContainer'
import {
    Typography,
    TypographyType,
} from '../../components/basic/typography/Typography'
import { CardListContainer } from '../../containers/card-list-container/CardListContainer'
import { LayoutContainer } from '../../containers/layout-container/LayoutContainer'

export const CardsPage = () => {
    return (
        <LayoutContainer>
            <Typography type={TypographyType.H1}>Cards Page</Typography>
            <CardListContainer />
        </LayoutContainer>
    )
}
