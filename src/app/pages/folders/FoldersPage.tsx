import { HeaderContainer } from '../../containers/header-container/HeaderContainer'
import {
    Typography,
    TypographyType,
} from '../../components/basic/typography/Typography'
import { FolderListContainer } from '../../containers/folder-list-container/FolderListContainer'

export const FoldersPage = () => {
    return (
        <div>
            <HeaderContainer />
            <Typography type={TypographyType.H1}>Folders</Typography>
            <FolderListContainer />
        </div>
    )
}
