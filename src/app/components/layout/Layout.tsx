import styled from 'styled-components'
import { ReactElement, ReactNode, useRef, useState } from 'react'
import { Colors } from '../../styles/colors'
import { onlyMobileAndTablet } from '../../styles/breakpoints'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

const ContainerDiv = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
`

const SidebarContainerDiv = styled.div<{ mobileSidebarOpened: boolean }>`
    width: 200px;
    background: ${Colors.Gray10};

    ${onlyMobileAndTablet} {
        position: fixed;
        left: ${(p) => (p.mobileSidebarOpened ? '0' : '-200')}px;
        transition: 0.3s;
        height: 100vh;
        z-index: 2;
    }
`

const MainContainerDiv = styled.div`
    flex-grow: 1;
    width: calc(100vw - 200px);
`

const HeaderContainerDiv = styled.div`
    height: 56px;
    display: flex;
    align-items: center;
`
const ChildrenContainerDiv = styled.div`
    background: ${Colors.Gray95};
    min-height: calc(100vh - 56px);
    ${onlyMobileAndTablet} {
        padding-top: 56px;
    }
`

const MobileOpenSidebarSvg = styled.svg`
    display: none;
    ${onlyMobileAndTablet} {
        display: block;
        position: fixed;
        top: 7px;
        left: 0;
        padding: 12px;
        z-index: 1;
    }
`

const CloseMobileSidebarSvg = styled.svg`
    display: none;
    ${onlyMobileAndTablet} {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        padding: 12px;
        z-index: 3;
    }
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
    const [mobileSidebarOpened, setMobileSidebarOpened] = useState(false)
    const ref = useRef()
    useOnClickOutside(ref, () => setMobileSidebarOpened(false))
    return (
        <ContainerDiv>
            <SidebarContainerDiv
                mobileSidebarOpened={mobileSidebarOpened}
                ref={ref}
            >
                {sidebar}
            </SidebarContainerDiv>
            {!mobileSidebarOpened && (
                <MobileOpenSidebarSvg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setMobileSidebarOpened(true)}
                >
                    <rect width="20" height="2" rx="1" fill="#D9D9D9" />
                    <rect y="8" width="20" height="2" rx="1" fill="#D9D9D9" />
                    <rect y="16" width="20" height="2" rx="1" fill="#D9D9D9" />
                </MobileOpenSidebarSvg>
            )}
            {mobileSidebarOpened && (
                <CloseMobileSidebarSvg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18 6L6 18M6 6L18 18"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </CloseMobileSidebarSvg>
            )}
            <MainContainerDiv>
                <HeaderContainerDiv>{header}</HeaderContainerDiv>
                <ChildrenContainerDiv>{children}</ChildrenContainerDiv>
            </MainContainerDiv>
        </ContainerDiv>
    )
}
