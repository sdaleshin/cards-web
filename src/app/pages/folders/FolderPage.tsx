import { LayoutContainer } from '../../containers/layout-container/LayoutContainer'
import {
    Typography,
    TypographyType,
} from '../../components/basic/typography/Typography'
import styled from 'styled-components'
import { onlyDesktop } from '../../styles/breakpoints'
import { gridSizes } from '../../styles/grid'
import { useParams } from 'react-router'
import { useGetFoldersQuery } from '../../redux/api/folder/folder.api'
import { ISkeletonable, skeletonOnDemand } from '../../styles/skeletonOnDemand'
import { CardListContainer } from '../../containers/card-list-container/CardListContainer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentFolderId } from '../../redux/folder/folder.slice'

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

const TitleTypography = styled(Typography)`
    margin-bottom: 16px;
    display: block;
`

export const FolderPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { isLoading, data: folders } = useGetFoldersQuery()

    const folder = folders?.find((f) => f.id === id)

    useEffect(() => {
        dispatch(setCurrentFolderId(id))
    }, [])

    return (
        <LayoutContainer>
            <ContainerDiv skeleton={isLoading}>
                <TitleTypography type={TypographyType.Subtitle}>
                    {folder?.name ?? 'SKELETON FOR NAME'}
                </TitleTypography>
                <CardListContainer />
            </ContainerDiv>
        </LayoutContainer>
    )
}
