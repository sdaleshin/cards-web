import {
    Typography,
    TypographyType,
} from '../../components/basic/typography/Typography'
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

export const SettingsPage = () => {
    return (
        <LayoutContainer>
            <ContainerDiv>
                <TitleTypography type={TypographyType.Subtitle}>
                    Settings
                </TitleTypography>
                <p>Where save words from dictionary</p>
                <p>Where save words form Extension translation</p>
                <p>Where save words form Google Translate</p>
                <p>Where save words form Oxford dictionary</p>
            </ContainerDiv>
        </LayoutContainer>
    )
}
