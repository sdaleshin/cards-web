import { FolderListItem } from './FolderListItem'
import styled from 'styled-components'

const ContainerDiv = styled.div`
    flex-wrap: wrap;
    display: flex;
`

export const FolderListSkeleton = () => {
    return (
        <ContainerDiv>
            {[
                {
                    id: '1',
                    userId: '1',
                    parentId: null,
                    name: 'PMBOK 1996',
                    cardsCount: 12,
                    updatedAt: '2023-05-18T19:02:09.189Z',
                    cardsUpdatedAt: '2023-05-18T19:02:09.189Z',
                },
                {
                    id: '2',
                    userId: '1',
                    parentId: null,
                    name: 'PMBOK 1996',
                    cardsCount: 12,
                    updatedAt: '2023-05-18T19:02:09.189Z',
                    cardsUpdatedAt: '2023-05-18T19:02:09.189Z',
                },
                {
                    id: '3',
                    userId: '1',
                    parentId: null,
                    name: 'PMBOK 1996',
                    cardsCount: 12,
                    updatedAt: '2023-05-18T19:02:09.189Z',
                    cardsUpdatedAt: '2023-05-18T19:02:09.189Z',
                },
                {
                    id: '4',
                    userId: '1',
                    parentId: null,
                    name: 'PMBOK 1996',
                    cardsCount: 12,
                    updatedAt: '2023-05-18T19:02:09.189Z',
                    cardsUpdatedAt: '2023-05-18T19:02:09.189Z',
                },
                {
                    id: '5',
                    userId: '1',
                    parentId: null,
                    name: 'PMBOK 1996',
                    cardsCount: 12,
                    updatedAt: '2023-05-18T19:02:09.189Z',
                    cardsUpdatedAt: '2023-05-18T19:02:09.189Z',
                },
            ].map((folder) => (
                <FolderListItem
                    key={folder.id}
                    folder={folder}
                    skeleton={true}
                />
            ))}
        </ContainerDiv>
    )
}
