import { LoginWithGoogleContainer } from '../../containers/login-with-google-container/LoginWithGoogleContainer'
import styled from 'styled-components'
import {
    Typography,
    TypographyType,
} from '../../components/basic/typography/Typography'
import { useSelector } from 'react-redux'
import { selectLoggedIn } from '../../redux/auth/auth.slice'
import { Navigate } from 'react-router-dom'
import { getTranslationUrl } from '../../utils/urls'
import { gridSizes } from '../../styles/grid'
import { Colors } from '../../styles/colors'
import { onlyMobileAndTablet } from '../../styles/breakpoints'

const ContainerDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const GridDiv = styled.div`
    display: flex;
    ${gridSizes({
        width: {
            mobile: {
                columns: 4,
                gutters: 3,
            },
            tablet: {
                columns: 8,
                gutters: 7,
            },
            desktop: {
                columns: 12,
                gutters: 11,
            },
        },
    })}
`

const HeaderGridDiv = styled(GridDiv)`
    height: 44px;
    margin-top: 20px;
    ${onlyMobileAndTablet} {
        margin-top: 6px;
    }
`

const MainGridDiv = styled(GridDiv)`
    justify-content: center;
    flex: 1;
`

const MainBlockDiv = styled.div`
    margin-top: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const GreetingTypography = styled(Typography)`
    color: ${Colors.Gray10};
    margin-bottom: 32px;
    display: block;
`

const FooterGridDiv = styled(GridDiv)`
    justify-content: center;
    height: 17px;
    margin-bottom: 24px;
`

const FooterLinksDiv = styled.div`
    display: flex;
`

const FooterLinkTypography = styled(Typography)`
    color: ${Colors.Gray70};
    margin: 0 8px;
    display: block;
`

const LogoSvg = styled.svg`
    ${onlyMobileAndTablet} {
        width: 74px;
    }
`

export const HomePage = () => {
    const loggedIn = useSelector(selectLoggedIn)
    return loggedIn ? (
        <Navigate to={getTranslationUrl()} />
    ) : (
        <ContainerDiv>
            <HeaderGridDiv>
                <LogoSvg
                    width="113"
                    height="44"
                    viewBox="0 0 113 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12.768 34.448C10.016 34.448 8.07467 33.2 6.944 30.704C5.83467 28.208 5.28 25.136 5.28 21.488C5.28 19.5253 5.536 17.6373 6.048 15.824C6.56 14.0107 7.38133 12.5173 8.512 11.344C9.664 10.1493 11.1147 9.552 12.864 9.552C14.208 9.552 15.3813 9.968 16.384 10.8C17.408 11.632 18.1867 12.72 18.72 14.064C19.2747 15.3867 19.552 16.7733 19.552 18.224L15.008 18.448C15.008 17.488 14.848 16.4 14.528 15.184C14.208 13.9467 13.568 13.328 12.608 13.328C11.6053 13.328 10.912 14.128 10.528 15.728C10.144 17.328 9.952 19.248 9.952 21.488C9.952 24.2613 10.1653 26.4907 10.592 28.176C11.0187 29.84 11.84 30.672 13.056 30.672C13.9093 30.672 14.5173 30.1707 14.88 29.168C15.2427 28.144 15.4773 26.9067 15.584 25.456L19.584 25.84C19.584 27.376 19.328 28.8053 18.816 30.128C18.304 31.4293 17.536 32.4747 16.512 33.264C15.488 34.0533 14.24 34.448 12.768 34.448ZM22.6708 10.576L27.1508 10V18.288C28.9854 16.6027 30.7028 15.76 32.3028 15.76C33.4334 15.76 34.3508 16.176 35.0548 17.008C35.7801 17.8187 36.1428 18.9173 36.1428 20.304V33.808L31.6628 34.192V21.936C31.6628 21.1467 31.5134 20.56 31.2148 20.176C30.9374 19.792 30.5641 19.6 30.0948 19.6C29.7108 19.6 29.3054 19.696 28.8788 19.888C28.4521 20.08 27.8761 20.3893 27.1508 20.816V33.808L22.6708 34.192V10.576ZM45.7768 34.416C43.6221 34.416 41.9581 33.5627 40.7848 31.856C39.6328 30.1493 39.0568 27.8773 39.0568 25.04C39.0568 22.224 39.6328 19.9733 40.7848 18.288C41.9368 16.6027 43.6008 15.76 45.7768 15.76C47.9314 15.76 49.5954 16.6027 50.7688 18.288C51.9634 19.9733 52.5608 22.224 52.5608 25.04C52.5608 27.856 51.9634 30.128 50.7688 31.856C49.5954 33.5627 47.9314 34.416 45.7768 34.416ZM45.7768 31.088C46.7368 31.088 47.3554 30.5013 47.6328 29.328C47.9101 28.1547 48.0488 26.7147 48.0488 25.008C48.0488 23.3013 47.9101 21.8613 47.6328 20.688C47.3554 19.5147 46.7368 18.928 45.7768 18.928C44.8168 18.928 44.2088 19.4827 43.9528 20.592C43.6968 21.7013 43.5688 23.056 43.5688 24.656C43.5688 26.6187 43.6968 28.1867 43.9528 29.36C44.2088 30.512 44.8168 31.088 45.7768 31.088ZM61.4643 34.416C59.3096 34.416 57.6456 33.5627 56.4723 31.856C55.3203 30.1493 54.7443 27.8773 54.7443 25.04C54.7443 22.224 55.3203 19.9733 56.4723 18.288C57.6243 16.6027 59.2883 15.76 61.4643 15.76C63.6189 15.76 65.2829 16.6027 66.4563 18.288C67.6509 19.9733 68.2483 22.224 68.2483 25.04C68.2483 27.856 67.6509 30.128 66.4563 31.856C65.2829 33.5627 63.6189 34.416 61.4643 34.416ZM61.4643 31.088C62.4243 31.088 63.0429 30.5013 63.3203 29.328C63.5976 28.1547 63.7363 26.7147 63.7363 25.008C63.7363 23.3013 63.5976 21.8613 63.3203 20.688C63.0429 19.5147 62.4243 18.928 61.4643 18.928C60.5043 18.928 59.8963 19.4827 59.6403 20.592C59.3843 21.7013 59.2563 23.056 59.2563 24.656C59.2563 26.6187 59.3843 28.1867 59.6403 29.36C59.8963 30.512 60.5043 31.088 61.4643 31.088ZM75.6798 34.416C72.2238 34.416 70.4958 31.28 70.4958 25.008C70.4958 21.744 70.9224 19.3867 71.7758 17.936C72.6291 16.4853 73.9624 15.76 75.7758 15.76C76.5438 15.76 77.2798 16.016 77.9838 16.528C78.6878 17.0187 79.1998 17.6373 79.5198 18.384V10.576L84.0318 10V33.808L80.6398 34.192L79.5198 31.76C79.3064 32.5493 78.9118 33.1893 78.3358 33.68C77.7598 34.1707 76.8744 34.416 75.6798 34.416ZM77.3438 31.216C77.9838 31.216 78.5064 30.864 78.9118 30.16C79.3171 29.4347 79.5198 28.2187 79.5198 26.512V20.496C78.9011 19.536 78.1758 19.056 77.3438 19.056C76.6398 19.056 76.1171 19.312 75.7758 19.824C75.4558 20.3147 75.2424 20.9653 75.1358 21.776C75.0504 22.5867 75.0078 23.664 75.0078 25.008C75.0078 26.3733 75.0504 27.4827 75.1358 28.336C75.2424 29.1893 75.4664 29.8827 75.8078 30.416C76.1491 30.9493 76.6611 31.216 77.3438 31.216ZM87.8903 13.68V9.04L92.3703 8.72V13.488L87.8903 13.68ZM87.8583 34.192V16.368L92.3383 15.984V33.808L87.8583 34.192ZM101.833 34.416C100.467 34.416 99.2938 33.9893 98.3125 33.136C97.3525 32.2827 96.6272 31.152 96.1365 29.744C95.6458 28.336 95.4005 26.8107 95.4005 25.168C95.4005 23.5467 95.6352 22.0213 96.1045 20.592C96.5952 19.1627 97.3312 18 98.3125 17.104C99.2938 16.208 100.499 15.76 101.929 15.76C103.017 15.76 103.987 16.0373 104.841 16.592C105.715 17.1253 106.398 17.8827 106.889 18.864C107.379 19.8453 107.646 20.9653 107.689 22.224L103.433 22.416C103.433 22.3307 103.39 21.9893 103.305 21.392C103.241 20.7947 103.081 20.304 102.825 19.92C102.59 19.536 102.281 19.344 101.897 19.344C101.043 19.344 100.499 19.9307 100.265 21.104C100.03 22.256 99.9125 23.5573 99.9125 25.008C99.9125 26.4373 100.03 27.7387 100.265 28.912C100.521 30.064 101.107 30.64 102.025 30.64C103.177 30.64 103.774 29.5093 103.817 27.248L107.593 27.664C107.315 29.8827 106.761 31.568 105.929 32.72C105.097 33.8507 103.731 34.416 101.833 34.416Z"
                        fill="#3A3940"
                    />
                </LogoSvg>
            </HeaderGridDiv>
            <MainGridDiv>
                <MainBlockDiv>
                    <GreetingTypography type={TypographyType.Subtitle}>
                        Welcome to Choodic
                    </GreetingTypography>
                    <LoginWithGoogleContainer />
                </MainBlockDiv>
            </MainGridDiv>
            <FooterGridDiv>
                <FooterLinksDiv>
                    <FooterLinkTypography type={TypographyType.BodySmall}>
                        About us
                    </FooterLinkTypography>
                    <FooterLinkTypography type={TypographyType.BodySmall}>
                        •
                    </FooterLinkTypography>
                    <FooterLinkTypography type={TypographyType.BodySmall}>
                        Terms
                    </FooterLinkTypography>
                    <FooterLinkTypography type={TypographyType.BodySmall}>
                        •
                    </FooterLinkTypography>
                    <FooterLinkTypography type={TypographyType.BodySmall}>
                        Privacy
                    </FooterLinkTypography>
                </FooterLinksDiv>
            </FooterGridDiv>
        </ContainerDiv>
    )
}
