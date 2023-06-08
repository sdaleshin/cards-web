import { useDispatch, useSelector } from 'react-redux'
import {
    removeJwtTokenAndRefreshToken,
    selectUserInfo,
} from '../../redux/auth/auth.slice'
import { Header } from '../../components/header/Header'
import { useGetFoldersQuery } from '../../redux/api/folder/folder.api'
import { ReactElement, useEffect } from 'react'
import {
    getFolderLastUpdatedAt,
    selectCurrentFolderId,
    setCurrentFolderId,
} from '../../redux/folder/folder.slice'
import { ISelectOption } from '../../components/select/Select'
import { useNavigate } from 'react-router'
import { getHomeUrl } from '../../utils/urls'

export const HeaderContainer = ({
    foldersSelectShown,
    actionsElement,
}: {
    foldersSelectShown: boolean
    actionsElement?: ReactElement
}) => {
    const { name, email } = useSelector(selectUserInfo)
    const currentFolderId = useSelector(selectCurrentFolderId)
    const { isLoading, data } = useGetFoldersQuery()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (data) {
            if (data.length && !currentFolderId) {
                const sorted = [...data].sort((a, b) =>
                    getFolderLastUpdatedAt(a) > getFolderLastUpdatedAt(b)
                        ? -1
                        : 1,
                )
                dispatch(setCurrentFolderId(sorted[0].id))
            }
        }
    }, [data])
    const selectedFolder =
        data && data.length
            ? data.find((el) => el.id === currentFolderId)
            : null
    const handleSelectedFolderChange = (folder: ISelectOption) =>
        dispatch(setCurrentFolderId(folder.id))

    const handleSignOutClick = () => {
        dispatch(removeJwtTokenAndRefreshToken())
        navigate(getHomeUrl())
    }
    return (
        <Header
            email={email}
            name={name}
            folders={data}
            selectedFolder={selectedFolder}
            onSelectedFolderChange={handleSelectedFolderChange}
            onSignOutClick={handleSignOutClick}
            foldersSelectShown={foldersSelectShown}
            actionsElement={actionsElement}
        />
    )
}
