import styled from 'styled-components'
import { ReactElement } from 'react'
import { onlyMobileAndTablet } from '../../styles/breakpoints'

const LogoSvg = styled.svg`
    margin: 20px 0 64px 23px;
    ${onlyMobileAndTablet} {
        margin-top: 64px;
    }
`

const Container = styled.div`
    width: 100%;
`

const MenuContainer = styled.div``

export const Sidebar = ({ menu }: { menu: ReactElement }) => {
    return (
        <Container>
            <LogoSvg
                width="103"
                height="27"
                viewBox="0 0 103 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7.768 26.448C5.016 26.448 3.07467 25.2 1.944 22.704C0.834667 20.208 0.28 17.136 0.28 13.488C0.28 11.5253 0.536 9.63733 1.048 7.824C1.56 6.01067 2.38133 4.51733 3.512 3.344C4.664 2.14933 6.11467 1.552 7.864 1.552C9.208 1.552 10.3813 1.968 11.384 2.8C12.408 3.632 13.1867 4.72 13.72 6.064C14.2747 7.38667 14.552 8.77333 14.552 10.224L10.008 10.448C10.008 9.488 9.848 8.4 9.528 7.184C9.208 5.94667 8.568 5.328 7.608 5.328C6.60533 5.328 5.912 6.128 5.528 7.728C5.144 9.328 4.952 11.248 4.952 13.488C4.952 16.2613 5.16533 18.4907 5.592 20.176C6.01867 21.84 6.84 22.672 8.056 22.672C8.90933 22.672 9.51733 22.1707 9.88 21.168C10.2427 20.144 10.4773 18.9067 10.584 17.456L14.584 17.84C14.584 19.376 14.328 20.8053 13.816 22.128C13.304 23.4293 12.536 24.4747 11.512 25.264C10.488 26.0533 9.24 26.448 7.768 26.448ZM17.6708 2.576L22.1508 2V10.288C23.9854 8.60267 25.7028 7.76 27.3028 7.76C28.4334 7.76 29.3508 8.176 30.0548 9.008C30.7801 9.81867 31.1428 10.9173 31.1428 12.304V25.808L26.6628 26.192V13.936C26.6628 13.1467 26.5134 12.56 26.2148 12.176C25.9374 11.792 25.5641 11.6 25.0948 11.6C24.7108 11.6 24.3054 11.696 23.8788 11.888C23.4521 12.08 22.8761 12.3893 22.1508 12.816V25.808L17.6708 26.192V2.576ZM40.7768 26.416C38.6221 26.416 36.9581 25.5627 35.7848 23.856C34.6328 22.1493 34.0568 19.8773 34.0568 17.04C34.0568 14.224 34.6328 11.9733 35.7848 10.288C36.9368 8.60267 38.6008 7.76 40.7768 7.76C42.9314 7.76 44.5954 8.60267 45.7688 10.288C46.9634 11.9733 47.5608 14.224 47.5608 17.04C47.5608 19.856 46.9634 22.128 45.7688 23.856C44.5954 25.5627 42.9314 26.416 40.7768 26.416ZM40.7768 23.088C41.7368 23.088 42.3554 22.5013 42.6328 21.328C42.9101 20.1547 43.0488 18.7147 43.0488 17.008C43.0488 15.3013 42.9101 13.8613 42.6328 12.688C42.3554 11.5147 41.7368 10.928 40.7768 10.928C39.8168 10.928 39.2088 11.4827 38.9528 12.592C38.6968 13.7013 38.5688 15.056 38.5688 16.656C38.5688 18.6187 38.6968 20.1867 38.9528 21.36C39.2088 22.512 39.8168 23.088 40.7768 23.088ZM56.4643 26.416C54.3096 26.416 52.6456 25.5627 51.4723 23.856C50.3203 22.1493 49.7443 19.8773 49.7443 17.04C49.7443 14.224 50.3203 11.9733 51.4723 10.288C52.6243 8.60267 54.2883 7.76 56.4643 7.76C58.6189 7.76 60.2829 8.60267 61.4563 10.288C62.6509 11.9733 63.2483 14.224 63.2483 17.04C63.2483 19.856 62.6509 22.128 61.4563 23.856C60.2829 25.5627 58.6189 26.416 56.4643 26.416ZM56.4643 23.088C57.4243 23.088 58.0429 22.5013 58.3203 21.328C58.5976 20.1547 58.7363 18.7147 58.7363 17.008C58.7363 15.3013 58.5976 13.8613 58.3203 12.688C58.0429 11.5147 57.4243 10.928 56.4643 10.928C55.5043 10.928 54.8963 11.4827 54.6403 12.592C54.3843 13.7013 54.2563 15.056 54.2563 16.656C54.2563 18.6187 54.3843 20.1867 54.6403 21.36C54.8963 22.512 55.5043 23.088 56.4643 23.088ZM70.6798 26.416C67.2238 26.416 65.4958 23.28 65.4958 17.008C65.4958 13.744 65.9224 11.3867 66.7758 9.936C67.6291 8.48533 68.9624 7.76 70.7758 7.76C71.5438 7.76 72.2798 8.016 72.9838 8.528C73.6878 9.01867 74.1998 9.63733 74.5198 10.384V2.576L79.0318 2V25.808L75.6398 26.192L74.5198 23.76C74.3064 24.5493 73.9118 25.1893 73.3358 25.68C72.7598 26.1707 71.8744 26.416 70.6798 26.416ZM72.3438 23.216C72.9838 23.216 73.5064 22.864 73.9118 22.16C74.3171 21.4347 74.5198 20.2187 74.5198 18.512V12.496C73.9011 11.536 73.1758 11.056 72.3438 11.056C71.6398 11.056 71.1171 11.312 70.7758 11.824C70.4558 12.3147 70.2424 12.9653 70.1358 13.776C70.0504 14.5867 70.0078 15.664 70.0078 17.008C70.0078 18.3733 70.0504 19.4827 70.1358 20.336C70.2424 21.1893 70.4664 21.8827 70.8078 22.416C71.1491 22.9493 71.6611 23.216 72.3438 23.216ZM82.8903 5.68V1.04L87.3703 0.719999V5.488L82.8903 5.68ZM82.8583 26.192V8.368L87.3383 7.984V25.808L82.8583 26.192ZM96.8325 26.416C95.4672 26.416 94.2938 25.9893 93.3125 25.136C92.3525 24.2827 91.6272 23.152 91.1365 21.744C90.6458 20.336 90.4005 18.8107 90.4005 17.168C90.4005 15.5467 90.6352 14.0213 91.1045 12.592C91.5952 11.1627 92.3312 10 93.3125 9.104C94.2938 8.208 95.4992 7.76 96.9285 7.76C98.0165 7.76 98.9872 8.03733 99.8405 8.592C100.715 9.12533 101.398 9.88267 101.889 10.864C102.379 11.8453 102.646 12.9653 102.689 14.224L98.4325 14.416C98.4325 14.3307 98.3898 13.9893 98.3045 13.392C98.2405 12.7947 98.0805 12.304 97.8245 11.92C97.5898 11.536 97.2805 11.344 96.8965 11.344C96.0432 11.344 95.4992 11.9307 95.2645 13.104C95.0298 14.256 94.9125 15.5573 94.9125 17.008C94.9125 18.4373 95.0298 19.7387 95.2645 20.912C95.5205 22.064 96.1072 22.64 97.0245 22.64C98.1765 22.64 98.7738 21.5093 98.8165 19.248L102.593 19.664C102.315 21.8827 101.761 23.568 100.929 24.72C100.097 25.8507 98.7312 26.416 96.8325 26.416Z"
                    fill="white"
                />
            </LogoSvg>
            <MenuContainer>{menu}</MenuContainer>
        </Container>
    )
}
