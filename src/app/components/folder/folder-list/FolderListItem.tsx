import styled from 'styled-components'
import { Colors } from '../../../styles/colors'
import { gridSizes } from '../../../styles/grid'

export interface IFolderListItem {
    id: number
    name: string
}

const StyledDiv = styled.div`
    border: 1px solid ${Colors.Gray90};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding-top: 32px;
    padding-bottom: 32px;
    margin-right: 24px;
    margin-bottom: 24px;
    box-sizing: border-box;
    ${gridSizes({
        width: {
            mobile: {
                columns: 4,
                gutters: 3,
            },
            tablet: {
                columns: 4,
                gutters: 3,
            },
            desktop: {
                columns: 4,
                gutters: 3,
            },
        },
    })}
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FolderListItem = ({ folder }: { folder: IFolderListItem }) => {
    return <StyledDiv>{folder.name}</StyledDiv>
}
