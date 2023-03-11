import { Layout } from '../../components/layout/Layout'
import { HeaderContainer } from '../header-container/HeaderContainer'
import { ReactNode } from 'react'
import { SidebarContainer } from '../sidebar-container/SidebarContainer'

export const LayoutContainer = ({ children }: { children: ReactNode }) => {
    return (
        <Layout sidebar={<SidebarContainer />} header={<HeaderContainer />}>
            {children}
        </Layout>
    )
}
