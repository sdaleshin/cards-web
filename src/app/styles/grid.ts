import {
    onlyBigDesktop,
    onlyMobile,
    onlySmallDesktop,
    onlyTablet,
} from './breakpoints'

const MOBILE_GUTTER_WIDTH = 16
const TABLET_GUTTER_WIDTH = 24
const DESKTOP_GUTTER_WIDTH = 24
const DESKTOP_COLUMNS_COUNT = 12
const MOBILE_COLUMNS_COUNT = 4
const TABLET_COLUMNS_COUNT = 8
export type SizeType = {
    columns: number
    gutters: number
}
export type ResponsiveSizeType = {
    mobile: SizeType
    tablet: SizeType
    desktop: SizeType
}
export type GridSizesType = {
    width?: ResponsiveSizeType | SizeType
    paddingLeft?: ResponsiveSizeType | SizeType
    paddingRight?: ResponsiveSizeType | SizeType
    marginLeft?: ResponsiveSizeType | SizeType
    marginRight?: ResponsiveSizeType | SizeType
}
const mobileColumnWidth = `(100vw - 64px) / ${MOBILE_COLUMNS_COUNT}`
const tabletColumnWidth = `(100vw - 216px) / ${TABLET_COLUMNS_COUNT}`
const desktopColumnWidth = `(100vw - 664px) / ${DESKTOP_COLUMNS_COUNT}`
const bigDesktopColumnWidth = `72px`
const getSizeString = (
    { columns, gutters }: SizeType,
    columnWidthString: string,
    gutterWidth: number,
) => {
    return `calc(${columns} * ${columnWidthString} + ${
        gutters * gutterWidth
    }px)`
}
const isResponsiveSizeType = (
    metrics: ResponsiveSizeType | SizeType,
): metrics is ResponsiveSizeType => {
    return 'mobile' in metrics
}
const getMetrics = (
    metrics: ResponsiveSizeType | SizeType,
    key?: keyof ResponsiveSizeType,
) => {
    return isResponsiveSizeType(metrics) ? metrics[key] : metrics
}
const metricsDictionary = {
    width: 'width',
    paddingLeft: 'padding-left',
    paddingRight: 'padding-right',
    marginLeft: 'margin-left',
    marginRight: 'margin-right',
}
const getMetricsString = (
    metrics: ResponsiveSizeType | SizeType,
    metricsName: keyof GridSizesType,
) => {
    const cssMetricsName = metricsDictionary[metricsName]
    const mobileMetricsString = getSizeString(
        getMetrics(metrics, 'mobile'),
        mobileColumnWidth,
        MOBILE_GUTTER_WIDTH,
    )
    const tabletMetricsString = getSizeString(
        getMetrics(metrics, 'tablet'),
        tabletColumnWidth,
        TABLET_GUTTER_WIDTH,
    )
    const desktopMetricsString = getSizeString(
        getMetrics(metrics, 'desktop'),
        desktopColumnWidth,
        DESKTOP_GUTTER_WIDTH,
    )
    const bigDesktopMetricsString = getSizeString(
        getMetrics(metrics, 'desktop'),
        bigDesktopColumnWidth,
        DESKTOP_GUTTER_WIDTH,
    )
    return `
    ${onlyMobile} {
        ${cssMetricsName}: ${mobileMetricsString} 
    }
    ${onlyTablet} {
        ${cssMetricsName}: ${tabletMetricsString}
    }
    ${onlySmallDesktop} {
        ${cssMetricsName}: ${desktopMetricsString} 
    }  
    ${onlyBigDesktop} {
        ${cssMetricsName}: ${bigDesktopMetricsString} 
    }
    `
}
export const gridSizes = ({
    width,
    paddingLeft,
    paddingRight,
    marginLeft,
    marginRight,
}: GridSizesType) => {
    let resultString = ``
    if (width) {
        resultString += getMetricsString(width, 'width')
    }
    if (paddingLeft) {
        resultString += getMetricsString(paddingLeft, 'paddingLeft')
    }
    if (paddingRight) {
        resultString += getMetricsString(paddingRight, 'paddingRight')
    }
    if (marginLeft) {
        resultString += getMetricsString(marginLeft, 'marginLeft')
    }
    if (marginRight) {
        resultString += getMetricsString(marginRight, 'marginRight')
    }
    return resultString
}
