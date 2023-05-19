import { getCardsUrl, getFoldersUrl, getTranslationUrl } from '../../utils/urls'
import { DictionarySvg } from '../../svg/DictionarySvg'
import { CardsSvg } from '../../svg/CardsSvg'
import { GroupsSvg } from '../../svg/GroupsSvg'

export const sidebarMenuItems = [
    {
        IconComponent: DictionarySvg,
        name: 'Dictionary',
        link: getTranslationUrl(),
    },
    {
        IconComponent: CardsSvg,
        name: 'Cards',
        link: getCardsUrl(),
    },
    {
        IconComponent: GroupsSvg,
        name: 'Groups',
        link: getFoldersUrl(),
    },
]
