import { LayoutContainer } from '../../containers/layout-container/LayoutContainer'
import {
    Typography,
    TypographyType,
} from '../../components/basic/typography/Typography'
import styled from 'styled-components'
import { TranslationContainer } from '../../containers/translation-container/TranslationContainer'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 40px;
`

const Column = styled.div`
    width: 552px;
`

const Title = styled(Typography)`
    margin-bottom: 16px;
    display: block;
`

export const TranslationPage = () => {
    return (
        <LayoutContainer>
            <Container>
                <Column>
                    <Title type={TypographyType.Subtitle}>Dictionary</Title>
                    <TranslationContainer />
                </Column>
            </Container>
        </LayoutContainer>
    )
}
