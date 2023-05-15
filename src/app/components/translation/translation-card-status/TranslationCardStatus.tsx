import styled, { css } from 'styled-components'
import { ReactNode } from 'react'
import { Colors } from '../../../styles/colors'

export enum TranslationCardStatusEnum {
    Add,
    Added,
    Delete,
}

const ContainerDiv = styled.div<{ status: TranslationCardStatusEnum }>`
    height: 68px;
    width: 100%;
    color: ${Colors.White};
    display: flex;
    align-items: center;
    padding-left: 40px;
    ${(p) => {
        switch (p.status) {
            case TranslationCardStatusEnum.Add:
                return css`
                    background: ${Colors.Red60};
                `
            case TranslationCardStatusEnum.Added:
                return css`
                    background: ${Colors.Blue60};
                `
            case TranslationCardStatusEnum.Delete:
                return css`
                    background: ${Colors.Gray60};
                `
        }
    }}
`

export const TranslationCardStatus = ({
    children,
    status,
    className,
}: {
    children: ReactNode
    status: TranslationCardStatusEnum
    className?: string
}) => {
    return (
        <ContainerDiv status={status} className={className}>
            {children}
        </ContainerDiv>
    )
}
