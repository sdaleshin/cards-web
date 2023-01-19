import { IMenuItem, MenuItem } from './MenuItem'

export const Menu = ({ items }: { items: IMenuItem[] }) => {
    return (
        <div>
            {items.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    )
}
