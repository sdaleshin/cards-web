import styled from 'styled-components'
import { ReactElement } from 'react'
import { onlyMobileAndTablet } from '../../styles/breakpoints'
import { LogoSvg } from '../../svg/LogoSvg'

const StyledLogoSvg = styled(LogoSvg)`
    margin: 20px 0 64px 23px;
    ${onlyMobileAndTablet} {
        margin-top: 64px;
    }
`

const Container = styled.div`
    width: 100%;
`

const MenuContainer = styled.div``

export const Sidebar = ({ menu }: { menu: ReactElement }) => {
    return (
        <Container>
            <StyledLogoSvg />
            <MenuContainer>{menu}</MenuContainer>
        </Container>
    )
}
