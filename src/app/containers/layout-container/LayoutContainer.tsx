import { Layout } from '../../components/layout/Layout'
import { HeaderContainer } from '../header-container/HeaderContainer'
import { ReactElement, ReactNode } from 'react'
import { SidebarContainer } from '../sidebar-container/SidebarContainer'

export const LayoutContainer = ({
    children,
    foldersSelectShown = false,
    actionsElement,
}: {
    children: ReactNode
    foldersSelectShown?: boolean
    actionsElement?: ReactElement
}) => {
    return (
        <Layout
            sidebar={<SidebarContainer />}
            header={
                <HeaderContainer
                    foldersSelectShown={foldersSelectShown}
                    actionsElement={actionsElement}
                />
            }
        >
            {children}
        </Layout>
    )
}
