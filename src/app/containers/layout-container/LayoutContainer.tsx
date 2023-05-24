import { Layout } from '../../components/layout/Layout'
import { HeaderContainer } from '../header-container/HeaderContainer'
import { ReactNode } from 'react'
import { SidebarContainer } from '../sidebar-container/SidebarContainer'

export const LayoutContainer = ({
    children,
    foldersSelectShown = false,
}: {
    children: ReactNode
    foldersSelectShown?: boolean
}) => {
    return (
        <Layout
            sidebar={<SidebarContainer />}
            header={<HeaderContainer foldersSelectShown={foldersSelectShown} />}
        >
            {children}
        </Layout>
    )
}
