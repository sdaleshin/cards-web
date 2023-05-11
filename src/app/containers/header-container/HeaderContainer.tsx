import { useDispatch, useSelector } from 'react-redux'
import {
    removeJwtTokenAndRefreshToken,
    selectUserInfo,
} from '../../redux/auth/auth.slice'
import { Header } from '../../components/header/Header'
import { useGetFoldersQuery } from '../../redux/api/folder/folder.api'
import { useEffect } from 'react'
import {
    selectCurrentFolderId,
    setCurrentFolderId,
} from '../../redux/folder/folder.slice'
import { ISelectOption } from '../../components/select/Select'
import { useNavigate } from 'react-router'
import { getHomeUrl } from '../../utils/urls'

export const HeaderContainer = () => {
    const { name, email } = useSelector(selectUserInfo)
    const currentFolderId = useSelector(selectCurrentFolderId)
    const { isLoading, data } = useGetFoldersQuery()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (data) {
            if (data.length) {
                dispatch(setCurrentFolderId(data[0].id))
            }
        }
    }, [data])
    const selectedFolder =
        data && data.length
            ? data.find((el) => el.id === currentFolderId)
            : null
    const handleSelectedFolderChange = (folder: ISelectOption) =>
        setCurrentFolderId(folder.id)
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
        />
    )
}
