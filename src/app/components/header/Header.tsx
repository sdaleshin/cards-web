import styled from 'styled-components'
import { Avatar } from '../avatar/Avatar'
import { Typography, TypographyType } from '../basic/typography/Typography'
import { Link } from 'react-router-dom'
import {
    getCardsUrl,
    getFoldersUrl,
    getHomeUrl,
    getTranslationUrl,
} from '../../utils/urls'

const StyledHeader = styled.header`
    height: 56px;
    width: 100%;
    display: flex;
    justify-content: center;
`

const StyledNameAndAvatarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledName = styled(Typography)`
    display: block;
    margin-right: 16px;
`
const StyledLink = styled(Link)`
    margin: 0 16px;
`

const StyledNavigationContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Header = ({ name, email }: { name: string; email: string }) => {
    return (
        <StyledHeader>
            <StyledNavigationContainer>
                <StyledLink to={getHomeUrl()}>
                    <Typography type={TypographyType.PreTitle}>Home</Typography>
                </StyledLink>
                <StyledLink to={getTranslationUrl()}>
                    <Typography type={TypographyType.PreTitle}>
                        Translation
                    </Typography>
                </StyledLink>
                <StyledLink to={getCardsUrl()}>
                    <Typography type={TypographyType.PreTitle}>
                        Cards
                    </Typography>
                </StyledLink>
                <StyledLink to={getFoldersUrl()}>
                    <Typography type={TypographyType.PreTitle}>
                        Folders
                    </Typography>
                </StyledLink>
            </StyledNavigationContainer>
            <StyledNameAndAvatarContainer>
                <div>
                    <StyledName type={TypographyType.PreTitle}>
                        {name ?? email}
                    </StyledName>
                </div>
                <Avatar name={name} email={email} />
            </StyledNameAndAvatarContainer>
        </StyledHeader>
    )
}
