import styled from 'styled-components'
import { ReactElement, ReactNode } from 'react'
import { Colors } from '../../styles/colors'
import { onlyMobileAndTablet } from '../../styles/breakpoints'

const ContainerDiv = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
`

const SidebarContainerDiv = styled.div`
    width: 200px;
    background: ${Colors.Gray10};

    ${onlyMobileAndTablet} {
        position: fixed;
        left: -200px;
    }
`

const MainContainerDiv = styled.div`
    flex-grow: 1;
    width: calc(100vw - 200px);
`

const HeaderContainerDiv = styled.div`
    height: 56px;
`
const ChildrenContainerDiv = styled.div`
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
        <ContainerDiv>
            <SidebarContainerDiv>{sidebar}</SidebarContainerDiv>
            <MainContainerDiv>
                <HeaderContainerDiv>{header}</HeaderContainerDiv>
                <ChildrenContainerDiv>{children}</ChildrenContainerDiv>
            </MainContainerDiv>
        </ContainerDiv>
    )
}
