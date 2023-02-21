import { HeaderContainer } from '../../containers/header-container/HeaderContainer'
import {
    Typography,
    TypographyType,
} from '../../components/basic/typography/Typography'

export const FoldersPage = () => {
    return (
        <div>
            <HeaderContainer />
            <Typography type={TypographyType.H1}>Folders Page</Typography>
        </div>
    )
}
