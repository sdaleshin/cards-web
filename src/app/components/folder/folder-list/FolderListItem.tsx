import styled from 'styled-components'

export interface IFolderListItem {
    id: number
    name: string
}

const StyledDiv = styled.div`
    border: 1px solid #e2e2e4;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 24px;
    width: 500px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FolderListItem = ({ folder }: { folder: IFolderListItem }) => {
    return <StyledDiv>{folder.name}</StyledDiv>
}
