import { ReactNode } from 'react'
import styled from 'styled-components'
import { Colors } from '../../../styles/colors'
import { gridSizes } from '../../../styles/grid'
import { onlyDesktop } from '../../../styles/breakpoints'

const ContainerDiv = styled.div`
    border: 1px solid ${Colors.Gray90};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 40px;
    margin-bottom: 24px;
    box-sizing: border-box;
    cursor: pointer;
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
    //align-items: center;
    flex-direction: column;
    ${onlyDesktop} {
        margin-right: 24px;
    }
    background: ${Colors.White};
`

export const FolderListItemTemplate = ({
    children,
    onClick,
    className,
}: {
    children: ReactNode
    onClick: () => void
    className?: string
}) => {
    return (
        <ContainerDiv onClick={onClick} className={className}>
            {children}
        </ContainerDiv>
    )
}
