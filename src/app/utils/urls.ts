export const getHomeUrl = () => {
    return '/'
}

export const getTranslationUrl = () => {
    return '/translation'
}

export const getCardsUrl = () => {
    return '/cards'
}

export const getFoldersListUrl = () => {
    return '/folders'
}

export const getFolderEditUrl = (id: string = ':id') => {
    return `/folders/${id}`
}

export const getStudyUrl = (folderId: string = ':folderId') => {
    return `/study/${folderId}`
}
