import {
    Typography,
    TypographyType,
} from '../../components/basic/typography/Typography'
import { FolderListContainer } from '../../containers/folder-list-container/FolderListContainer'
import { LayoutContainer } from '../../containers/layout-container/LayoutContainer'
import styled from 'styled-components'
import { onlyDesktop } from '../../styles/breakpoints'

const ContainerDiv = styled.div`
    ${onlyDesktop} {
        margin-left: 32px;
    }
    padding-top: 40px;
`

const TitleTypography = styled(Typography)`
    margin-bottom: 16px;
    display: block;
`

export const FoldersPage = () => {
    return (
        <LayoutContainer>
            <ContainerDiv>
                <TitleTypography type={TypographyType.Subtitle}>
                    Groups
                </TitleTypography>
                <FolderListContainer />
            </ContainerDiv>
        </LayoutContainer>
    )
}
