import styled from 'styled-components'
import { onlyMobileAndTablet } from '../../styles/breakpoints'
import { Colors } from '../../styles/colors'
import { gridSizes } from '../../styles/grid'
import { ISelectOption, Select } from '../select/Select'
import { HeaderUser } from './header-user/HeaderUser'

const StyledHeader = styled.header`
    height: 56px;
    width: 100%;
    display: flex;

    ${onlyMobileAndTablet} {
        background: ${Colors.Gray20};
    }
`

const GridRowDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 32px;
    ${gridSizes({
        width: {
            desktop: { columns: 12, gutters: 11 },
            tablet: { columns: 8, gutters: 7 },
            mobile: { columns: 4, gutters: 3 },
        },
    })}
`

export const Header = ({
    name,
    email,
    selectedFolder,
    folders,
    onSelectedFolderChange,
    onSignOutClick,
}: {
    name: string
    email: string
    selectedFolder: ISelectOption
    folders: ISelectOption[]
    onSelectedFolderChange: (folder: ISelectOption) => void
    onSignOutClick: () => void
}) => {
    return (
        <StyledHeader>
            <GridRowDiv>
                <Select
                    options={folders}
                    onChange={onSelectedFolderChange}
                    selectedOption={selectedFolder}
                />
                <HeaderUser
                    name={name}
                    email={email}
                    onSignOutClick={onSignOutClick}
                />
            </GridRowDiv>
        </StyledHeader>
    )
}
