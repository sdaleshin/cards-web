import { Sidebar } from '../../components/sidebar/Sidebar'
import { Menu } from '../../components/menu/Menu'
import { sidebarMenuItems } from './sidebar-menu-items'
import { useLocation } from 'react-router-dom'

export const SidebarContainer = () => {
    const location = useLocation()
    return (
        <Sidebar
            menu={
                <Menu
                    items={sidebarMenuItems}
                    currentRoute={location.pathname}
                />
            }
        />
    )
}
