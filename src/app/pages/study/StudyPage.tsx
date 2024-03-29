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
    margin-left: 8px;
    padding-top: 40px;
`

const TitleTypography = styled(Typography)`
    margin-bottom: 16px;
    display: block;
`

export const StudyPage = () => {
    return (
        <LayoutContainer>
            <ContainerDiv>
                <TitleTypography type={TypographyType.Subtitle}>
                    Study
                </TitleTypography>
                <p>Look at cards</p>
                <p>Fill blank</p>
                <p>Quiz</p>
                <p>Game</p>
                <p>Writing</p>
                <FolderListContainer />
            </ContainerDiv>
        </LayoutContainer>
    )
}
