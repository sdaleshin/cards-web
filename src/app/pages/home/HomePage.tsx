import { LoginWithGoogle } from '../../containers/login-with-google/LoginWithGoogle'
import styled from 'styled-components'
import {
    Typography,
    TypographyType,
} from '../../components/basic/typography/Typography'
import { useSelector } from 'react-redux'
import { selectLoggedIn, selectUserInfo } from '../../redux/auth/auth.slice'
import { Link } from 'react-router-dom'
import { HeaderContainer } from '../../containers/header-container/HeaderContainer'

const StyledContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 56px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const NavigationBlock = styled.div`
    border: 1px solid #e2e2e4;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 24px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 36px;
`

export const HomePage = () => {
    const loggedIn = useSelector(selectLoggedIn)
    return loggedIn ? (
        <>
            <HeaderContainer />
            <StyledContainer>
                <StyledLink to="/translation">
                    <NavigationBlock>
                        <Typography type={TypographyType.H1}>
                            Translation
                        </Typography>
                    </NavigationBlock>
                </StyledLink>
                <StyledLink to="/folders">
                    <NavigationBlock>
                        <Typography type={TypographyType.H1}>
                            Folders
                        </Typography>
                    </NavigationBlock>
                </StyledLink>
                <StyledLink to="/cards">
                    <NavigationBlock>
                        <Typography type={TypographyType.H1}>Cards</Typography>
                    </NavigationBlock>
                </StyledLink>
            </StyledContainer>
        </>
    ) : (
        <StyledContainer>
            <div>
                <Typography type={TypographyType.H1}>
                    Welcome to choodic.com
                </Typography>
            </div>
            <LoginWithGoogle />
        </StyledContainer>
    )
}
