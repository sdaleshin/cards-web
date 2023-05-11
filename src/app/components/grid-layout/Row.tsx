import styled from 'styled-components'
import { ReactNode } from 'react'

const RowDiv = styled.div``

export const Row = ({
    className,
    children,
}: {
    className: string
    children: ReactNode
}) => {
    return <RowDiv className={className}>{children}</RowDiv>
}
