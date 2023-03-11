import styled from 'styled-components'
import { Avatar } from '../avatar/Avatar'
import { Typography, TypographyType } from '../basic/typography/Typography'

const StyledHeader = styled.header`
    height: 56px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const StyledNameAndAvatarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 96px;
`
const StyledName = styled(Typography)`
    display: block;
    margin-right: 16px;
`
export const Header = ({ name, email }: { name: string; email: string }) => {
    return (
        <StyledHeader>
            <StyledNameAndAvatarContainer>
                <div>
                    <StyledName type={TypographyType.Body}>
                        {name ?? email}
                    </StyledName>
                </div>
                <Avatar name={name} email={email} />
            </StyledNameAndAvatarContainer>
        </StyledHeader>
    )
}
