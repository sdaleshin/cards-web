import { IMenuItem, MenuItem } from './MenuItem'

export const Menu = ({
    items,
    currentRoute,
}: {
    items: IMenuItem[]
    currentRoute: string
}) => {
    return (
        <div>
            {items.map((item) => (
                <MenuItem
                    key={item.name}
                    item={item}
                    active={item.link === currentRoute}
                />
            ))}
        </div>
    )
}
