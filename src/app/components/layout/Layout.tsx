import styled from 'styled-components'
import { ReactElement, ReactNode } from 'react'
import { Colors } from '../../styles/colors'
import { onlyMobileAndTablet } from '../../styles/breakpoints'

const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
`

const SidebarContainer = styled.div`
    width: 200px;
    background: ${Colors.Gray10};

    ${onlyMobileAndTablet} {
        position: fixed;
        left: -200px;
    }
`

const MainContainer = styled.div`
    flex-grow: 1;
    width: calc(100vw - 200px);
`

const HeaderContainer = styled.div``
const ChildrenContainer = styled.div`
    background: ${Colors.Gray95};
    min-height: calc(100vh - 56px);
`

export const Layout = ({
    sidebar,
    header,
    children,
}: {
    sidebar: ReactElement
    header: ReactElement
    children: ReactNode
}) => {
    return (
        <Container>
            <SidebarContainer>{sidebar}</SidebarContainer>
            <MainContainer>
                <HeaderContainer>{header}</HeaderContainer>
                <ChildrenContainer>{children}</ChildrenContainer>
            </MainContainer>
        </Container>
    )
}
