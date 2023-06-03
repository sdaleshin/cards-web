import { LayoutContainer } from '../../containers/layout-container/LayoutContainer'
import styled from 'styled-components'
import { onlyDesktop } from '../../styles/breakpoints'
import { gridSizes } from '../../styles/grid'
import { useParams } from 'react-router'
import {
    useGetFoldersQuery,
    useUpdateFolderMutation,
} from '../../redux/api/folder/folder.api'
import { ISkeletonable, skeletonOnDemand } from '../../styles/skeletonOnDemand'
import { CardListContainer } from '../../containers/card-list-container/CardListContainer'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    setCurrentFolderId,
    validateFolderName,
} from '../../redux/folder/folder.slice'
import { FolderName } from '../../components/folder/folder-name/FolderName'
import trim from 'lodash/trim'

const ContainerDiv = styled.div<ISkeletonable>`
    ${skeletonOnDemand}
    ${onlyDesktop} {
        margin-left: 32px;
    }
    padding-top: 40px;
    ${gridSizes({
        width: {
            desktop: {
                columns: 6,
                gutters: 5,
            },
            tablet: {
                columns: 8,
                gutters: 7,
            },
            mobile: {
                columns: 4,
                gutters: 3,
            },
        },
        paddingLeft: {
            desktop: {
                columns: 3,
                gutters: 3,
            },
            tablet: {
                columns: 0,
                gutters: 1,
            },
            mobile: {
                columns: 0,
                gutters: 0.5,
            },
        },
    })}
`

const StyledFolderName = styled(FolderName)`
    margin-bottom: 24px;
`

export const FolderPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [inEditMode, setInEditMode] = useState(false)
    const [updateFolder] = useUpdateFolderMutation()

    const { isLoading, data: folders } = useGetFoldersQuery()

    const folder = folders?.find((f) => f.id === id)

    const handleSaveClick = (name: string) => {
        updateFolder({ ...folder, name: trim(name) })
        setInEditMode(false)
    }

    useEffect(() => {
        dispatch(setCurrentFolderId(id))
    }, [])

    return (
        <LayoutContainer>
            <ContainerDiv skeleton={isLoading}>
                <StyledFolderName
                    name={folder?.name ?? 'SKELETON FOR NAME'}
                    inEditMode={inEditMode}
                    onEditClick={() => setInEditMode(true)}
                    onCancelClick={() => setInEditMode(false)}
                    onSaveClick={handleSaveClick}
                    validateFolderName={(name) =>
                        name !== folder?.name &&
                        validateFolderName(trim(name), folders)
                    }
                />
                <CardListContainer folderId={id} />
            </ContainerDiv>
        </LayoutContainer>
    )
}
