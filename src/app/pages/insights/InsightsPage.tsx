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

export const InsightsPage = () => {
    return (
        <LayoutContainer>
            <ContainerDiv>
                <TitleTypography type={TypographyType.Subtitle}>
                    Insights
                </TitleTypography>
                <p>Some charts</p>
            </ContainerDiv>
        </LayoutContainer>
    )
}
