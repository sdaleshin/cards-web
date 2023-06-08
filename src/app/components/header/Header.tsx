import styled from 'styled-components'
import { onlyMobileAndTablet } from '../../styles/breakpoints'
import { Colors } from '../../styles/colors'
import { gridSizes } from '../../styles/grid'
import { ISelectOption, Select } from '../select/Select'
import { HeaderUser } from './header-user/HeaderUser'
import { ReactElement } from 'react'

const StyledHeader = styled.header`
    width: 100%;
    height: 56px;
    display: flex;
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
    ${onlyMobileAndTablet} {
        margin-left: 0;
        width: 100vw;
    }
`

const FoldersSelect = styled(Select)`
    top: 56px;
`

const MobileFixedDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${onlyMobileAndTablet} {
        position: fixed;
        width: 100vw;
        background: ${Colors.Gray20};
        height: 56px;
    }
`

const LogoSvg = styled.svg`
    display: none;

    ${onlyMobileAndTablet} {
        display: block;
        margin-top: -2px;
    }
`

const ActionsContainerDiv = styled.div`
    margin-right: 48px;
    ${onlyMobileAndTablet} {
        position: fixed;
        bottom: 0;
        width: 100vw;
        background: ${Colors.White};
        padding: 16px 8px;
        box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.1);
        margin: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
    }
`

export const Header = ({
    name,
    email,
    selectedFolder,
    folders,
    onSelectedFolderChange,
    onSignOutClick,
    foldersSelectShown,
    actionsElement,
}: {
    name: string
    email: string
    selectedFolder: ISelectOption
    folders: ISelectOption[]
    onSelectedFolderChange: (folder: ISelectOption) => void
    onSignOutClick: () => void
    foldersSelectShown: boolean
    actionsElement?: ReactElement
}) => {
    return (
        <StyledHeader>
            <GridRowDiv>
                {foldersSelectShown ? (
                    <FoldersSelect
                        options={folders}
                        onChange={onSelectedFolderChange}
                        selectedOption={selectedFolder}
                        fullWidthOnMobile={true}
                    />
                ) : (
                    <div></div>
                )}
                <MobileFixedDiv>
                    <LogoSvg
                        width="75"
                        height="44"
                        viewBox="0 0 75 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.98 30.28C8.26 30.28 7.04667 29.5 6.34 27.94C5.64667 26.38 5.3 24.46 5.3 22.18C5.3 20.9533 5.46 19.7733 5.78 18.64C6.1 17.5067 6.61333 16.5733 7.32 15.84C8.04 15.0933 8.94667 14.72 10.04 14.72C10.88 14.72 11.6133 14.98 12.24 15.5C12.88 16.02 13.3667 16.7 13.7 17.54C14.0467 18.3667 14.22 19.2333 14.22 20.14L11.38 20.28C11.38 19.68 11.28 19 11.08 18.24C10.88 17.4667 10.48 17.08 9.88 17.08C9.25333 17.08 8.82 17.58 8.58 18.58C8.34 19.58 8.22 20.78 8.22 22.18C8.22 23.9133 8.35333 25.3067 8.62 26.36C8.88667 27.4 9.4 27.92 10.16 27.92C10.6933 27.92 11.0733 27.6067 11.3 26.98C11.5267 26.34 11.6733 25.5667 11.74 24.66L14.24 24.9C14.24 25.86 14.08 26.7533 13.76 27.58C13.44 28.3933 12.96 29.0467 12.32 29.54C11.68 30.0333 10.9 30.28 9.98 30.28ZM16.1692 15.36L18.9692 15V20.18C20.1159 19.1267 21.1892 18.6 22.1892 18.6C22.8959 18.6 23.4692 18.86 23.9092 19.38C24.3626 19.8867 24.5892 20.5733 24.5892 21.44V29.88L21.7892 30.12V22.46C21.7892 21.9667 21.6959 21.6 21.5092 21.36C21.3359 21.12 21.1026 21 20.8092 21C20.5692 21 20.3159 21.06 20.0492 21.18C19.7826 21.3 19.4226 21.4933 18.9692 21.76V29.88L16.1692 30.12V15.36ZM30.6105 30.26C29.2638 30.26 28.2238 29.7267 27.4905 28.66C26.7705 27.5933 26.4105 26.1733 26.4105 24.4C26.4105 22.64 26.7705 21.2333 27.4905 20.18C28.2105 19.1267 29.2505 18.6 30.6105 18.6C31.9571 18.6 32.9971 19.1267 33.7305 20.18C34.4771 21.2333 34.8505 22.64 34.8505 24.4C34.8505 26.16 34.4771 27.58 33.7305 28.66C32.9971 29.7267 31.9571 30.26 30.6105 30.26ZM30.6105 28.18C31.2105 28.18 31.5971 27.8133 31.7705 27.08C31.9438 26.3467 32.0305 25.4467 32.0305 24.38C32.0305 23.3133 31.9438 22.4133 31.7705 21.68C31.5971 20.9467 31.2105 20.58 30.6105 20.58C30.0105 20.58 29.6305 20.9267 29.4705 21.62C29.3105 22.3133 29.2305 23.16 29.2305 24.16C29.2305 25.3867 29.3105 26.3667 29.4705 27.1C29.6305 27.82 30.0105 28.18 30.6105 28.18ZM40.4152 30.26C39.0685 30.26 38.0285 29.7267 37.2952 28.66C36.5752 27.5933 36.2152 26.1733 36.2152 24.4C36.2152 22.64 36.5752 21.2333 37.2952 20.18C38.0152 19.1267 39.0552 18.6 40.4152 18.6C41.7618 18.6 42.8018 19.1267 43.5352 20.18C44.2818 21.2333 44.6552 22.64 44.6552 24.4C44.6552 26.16 44.2818 27.58 43.5352 28.66C42.8018 29.7267 41.7618 30.26 40.4152 30.26ZM40.4152 28.18C41.0152 28.18 41.4018 27.8133 41.5752 27.08C41.7485 26.3467 41.8352 25.4467 41.8352 24.38C41.8352 23.3133 41.7485 22.4133 41.5752 21.68C41.4018 20.9467 41.0152 20.58 40.4152 20.58C39.8152 20.58 39.4352 20.9267 39.2752 21.62C39.1152 22.3133 39.0352 23.16 39.0352 24.16C39.0352 25.3867 39.1152 26.3667 39.2752 27.1C39.4352 27.82 39.8152 28.18 40.4152 28.18ZM49.2998 30.26C47.1398 30.26 46.0598 28.3 46.0598 24.38C46.0598 22.34 46.3265 20.8667 46.8598 19.96C47.3932 19.0533 48.2265 18.6 49.3598 18.6C49.8398 18.6 50.2998 18.76 50.7398 19.08C51.1798 19.3867 51.4998 19.7733 51.6998 20.24V15.36L54.5198 15V29.88L52.3998 30.12L51.6998 28.6C51.5665 29.0933 51.3198 29.4933 50.9598 29.8C50.5998 30.1067 50.0465 30.26 49.2998 30.26ZM50.3398 28.26C50.7398 28.26 51.0665 28.04 51.3198 27.6C51.5732 27.1467 51.6998 26.3867 51.6998 25.32V21.56C51.3132 20.96 50.8598 20.66 50.3398 20.66C49.8998 20.66 49.5732 20.82 49.3598 21.14C49.1598 21.4467 49.0265 21.8533 48.9598 22.36C48.9065 22.8667 48.8798 23.54 48.8798 24.38C48.8798 25.2333 48.9065 25.9267 48.9598 26.46C49.0265 26.9933 49.1665 27.4267 49.3798 27.76C49.5932 28.0933 49.9132 28.26 50.3398 28.26ZM56.9314 17.3V14.4L59.7314 14.2V17.18L56.9314 17.3ZM56.9114 30.12V18.98L59.7114 18.74V29.88L56.9114 30.12ZM65.6453 30.26C64.792 30.26 64.0586 29.9933 63.4453 29.46C62.8453 28.9267 62.392 28.22 62.0853 27.34C61.7786 26.46 61.6253 25.5067 61.6253 24.48C61.6253 23.4667 61.772 22.5133 62.0653 21.62C62.372 20.7267 62.832 20 63.4453 19.44C64.0586 18.88 64.812 18.6 65.7053 18.6C66.3853 18.6 66.992 18.7733 67.5253 19.12C68.072 19.4533 68.4986 19.9267 68.8053 20.54C69.112 21.1533 69.2786 21.8533 69.3053 22.64L66.6453 22.76C66.6453 22.7067 66.6186 22.4933 66.5653 22.12C66.5253 21.7467 66.4253 21.44 66.2653 21.2C66.1186 20.96 65.9253 20.84 65.6853 20.84C65.152 20.84 64.812 21.2067 64.6653 21.94C64.5186 22.66 64.4453 23.4733 64.4453 24.38C64.4453 25.2733 64.5186 26.0867 64.6653 26.82C64.8253 27.54 65.192 27.9 65.7653 27.9C66.4853 27.9 66.8586 27.1933 66.8853 25.78L69.2453 26.04C69.072 27.4267 68.7253 28.48 68.2053 29.2C67.6853 29.9067 66.832 30.26 65.6453 30.26Z"
                            fill="white"
                        />
                    </LogoSvg>
                    {!!actionsElement && (
                        <ActionsContainerDiv>
                            {actionsElement}
                        </ActionsContainerDiv>
                    )}
                    <HeaderUser
                        name={name}
                        email={email}
                        onSignOutClick={onSignOutClick}
                    />
                </MobileFixedDiv>
            </GridRowDiv>
        </StyledHeader>
    )
}
