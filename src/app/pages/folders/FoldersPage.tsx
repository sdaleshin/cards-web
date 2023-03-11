import { HeaderContainer } from '../../containers/header-container/HeaderContainer'
import {
    Typography,
    TypographyType,
} from '../../components/basic/typography/Typography'
import { FolderListContainer } from '../../containers/folder-list-container/FolderListContainer'
import { LayoutContainer } from '../../containers/layout-container/LayoutContainer'

export const FoldersPage = () => {
    return (
        <LayoutContainer>
            <Typography type={TypographyType.H1}>Folders</Typography>
            <FolderListContainer />
        </LayoutContainer>
    )
}
