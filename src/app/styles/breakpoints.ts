export enum Breakpoints {
    MobileMaxWidth = 599,
    TabletMaxWidth = 1279,
    DesktopMaxWidth = 1439,
}

export const onlyMobile = `@media (max-width: ${Breakpoints.MobileMaxWidth}px)`
export const onlyMobileAndTablet = `@media (max-width: ${Breakpoints.TabletMaxWidth}px)`
export const onlyTablet = `@media (min-width: ${
    Breakpoints.MobileMaxWidth + 1
}px) and (max-width: ${Breakpoints.TabletMaxWidth}px)`
export const onlyDesktop = `@media (min-width: ${
    Breakpoints.TabletMaxWidth + 1
}px)`
export const onlySmallDesktop = `@media (min-width: ${
    Breakpoints.TabletMaxWidth + 1
}px) and (max-width: ${Breakpoints.DesktopMaxWidth}px)`
export const onlyBigDesktop = `@media (min-width: ${
    Breakpoints.DesktopMaxWidth + 1
}px)`
