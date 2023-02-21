import { HeaderContainer } from '../../containers/header-container/HeaderContainer'
import {
    Typography,
    TypographyType,
} from '../../components/basic/typography/Typography'

export const CardsPage = () => {
    return (
        <div>
            <HeaderContainer />
            <Typography type={TypographyType.H1}>Cards Page</Typography>
        </div>
    )
}
