import {
    getFoldersListUrl,
    getInsightsUrl,
    getSettingsUrl,
    getStudyUrl,
    getTranslationUrl,
} from '../../utils/urls'
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
        name: 'Study',
        link: getStudyUrl(),
    },
    {
        IconComponent: GroupsSvg,
        name: 'Groups',
        link: getFoldersListUrl(),
    },
    {
        IconComponent: CardsSvg,
        name: 'Insights',
        link: getInsightsUrl(),
    },
    {
        IconComponent: CardsSvg,
        name: 'Settings',
        link: getSettingsUrl(),
    },
]
