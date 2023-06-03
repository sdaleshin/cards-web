import { LayoutContainer } from '../../containers/layout-container/LayoutContainer'
import styled from 'styled-components'
import { onlyDesktop } from '../../styles/breakpoints'
import { gridSizes } from '../../styles/grid'
import { useNavigate } from 'react-router'
import {
    useAddFolderMutation,
    useGetFoldersQuery,
} from '../../redux/api/folder/folder.api'
import { FolderName } from '../../components/folder/folder-name/FolderName'
import { getFolderEditUrl, getFoldersListUrl } from '../../utils/urls'
import { generateId } from '../../utils/generateId'
import { validateFolderName } from '../../redux/folder/folder.slice'
import { getCurrentDateString } from '../../utils/getCurrentDateString'
import trim from 'lodash/trim'

const ContainerDiv = styled.div`
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

export const NewFolderPage = () => {
    const navigate = useNavigate()

    const [addFolder] = useAddFolderMutation()
    const { data: folders } = useGetFoldersQuery()

    const handleSaveClick = (name: string) => {
        const currentDate = getCurrentDateString()
        const id = generateId()
        addFolder({
            id,
            name: trim(name),
            parentId: null,
            cardsCount: 0,
            cardsUpdatedAt: currentDate,
            updatedAt: currentDate,
        })
        navigate(getFolderEditUrl(id))
    }

    const handleCancelClick = () => navigate(getFoldersListUrl())

    return (
        <LayoutContainer>
            <ContainerDiv>
                <FolderName
                    inEditMode={true}
                    onSaveClick={handleSaveClick}
                    onCancelClick={handleCancelClick}
                    validateFolderName={(name) =>
                        validateFolderName(trim(name), folders)
                    }
                />
                {/*<CardListContainer />*/}
            </ContainerDiv>
        </LayoutContainer>
    )
}
