import { useDispatch, useSelector } from 'react-redux'
import { selectUserInfo } from '../../redux/auth/auth.slice'
import { Header } from '../../components/header/Header'
import { useGetFoldersQuery } from '../../redux/api/folder/folder.api'
import { useEffect } from 'react'
import { setCurrentFolderId } from '../../redux/folder/folder.slice'

export const HeaderContainer = () => {
    const { name, email } = useSelector(selectUserInfo)
    const { isLoading, data } = useGetFoldersQuery()
    const dispatch = useDispatch()
    useEffect(() => {
        if (data) {
            if (data.length) {
                dispatch(setCurrentFolderId(data[0].id))
            }
        }
    }, [data])
    return <Header email={email} name={name} />
}
