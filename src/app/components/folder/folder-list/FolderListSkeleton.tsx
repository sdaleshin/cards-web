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
                    name: 'PMBOK 1996',
                    cardsCount: 12,
                    updatedAt: '2023-05-18T19:02:09.189Z',
                },
                {
                    id: '2',
                    name: 'PMBOK 1996',
                    cardsCount: 12,
                    updatedAt: '2023-05-18T19:02:09.189Z',
                },
                {
                    id: '3',
                    name: 'PMBOK 1996',
                    cardsCount: 12,
                    updatedAt: '2023-05-18T19:02:09.189Z',
                },
                {
                    id: '4',
                    name: 'PMBOK 1996',
                    cardsCount: 12,
                    updatedAt: '2023-05-18T19:02:09.189Z',
                },
                {
                    id: '5',
                    name: 'PMBOK 1996',
                    cardsCount: 12,
                    updatedAt: '2023-05-18T19:02:09.189Z',
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
