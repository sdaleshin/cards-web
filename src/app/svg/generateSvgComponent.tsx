import { cloneElement, ReactElement } from 'react'
import { SvgType } from './svg.types'

export function generateSvgComponent(element: ReactElement) {
    return (props: SvgType) => {
        return cloneElement(element, props)
    }
}
