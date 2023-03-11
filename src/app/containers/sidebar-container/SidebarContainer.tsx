import { Sidebar } from '../../components/sidebar/Sidebar'
import { Menu } from '../../components/menu/Menu'
import { sidebarMenuItems } from './sidebar-menu-items'

export const SidebarContainer = () => {
    return <Sidebar menu={<Menu items={sidebarMenuItems} />} />
}
