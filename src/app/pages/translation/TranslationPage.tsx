import { LayoutContainer } from '../../containers/layout-container/LayoutContainer'
import {
    Typography,
    TypographyType,
} from '../../components/basic/typography/Typography'
import styled from 'styled-components'
import { TranslationContainer } from '../../containers/translation-container/TranslationContainer'
import { onlyDesktop } from '../../styles/breakpoints'
import { gridSizes } from '../../styles/grid'

const ContainerDiv = styled.div`
    ${onlyDesktop} {
        margin-left: 32px;
    }
    padding-top: 40px;
    ${gridSizes({
        width: {
            desktop: {
                columns: 6,
                gutters: 5,
            },
            tablet: {
                columns: 8,
                gutters: 7,
            },
            mobile: {
                columns: 4,
                gutters: 3,
            },
        },
        paddingLeft: {
            desktop: {
                columns: 3,
                gutters: 3,
            },
            tablet: {
                columns: 0,
                gutters: 0,
            },
            mobile: {
                columns: 0,
                gutters: 0,
            },
        },
    })}
`

const TitleTypography = styled(Typography)`
    margin-bottom: 16px;
    display: block;
`

export const TranslationPage = () => {
    return (
        <LayoutContainer>
            <ContainerDiv>
                <TitleTypography type={TypographyType.Subtitle}>
                    Dictionary
                </TitleTypography>
                <TranslationContainer />
            </ContainerDiv>
        </LayoutContainer>
    )
}
