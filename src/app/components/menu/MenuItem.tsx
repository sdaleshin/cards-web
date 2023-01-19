export interface IMenuItem {
    id: string
    title: string
}

export const MenuItem = ({ item }: { item: IMenuItem }) => {
    return <div>{item.title}</div>
}
