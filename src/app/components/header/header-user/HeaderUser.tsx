import { Typography, TypographyType } from '../../basic/typography/Typography'
import { Avatar } from '../../avatar/Avatar'
import styled from 'styled-components'
import { onlyMobileAndTablet } from '../../../styles/breakpoints'
import { Colors } from '../../../styles/colors'
import { useRef, useState } from 'react'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

const RowDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;

    ${onlyMobileAndTablet} {
        display: none;
    }
`
const NameTypography = styled(Typography)`
    display: block;
    margin-right: 16px;
`

const UserMenuDiv = styled.div`
    position: absolute;
    background: ${Colors.White};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    margin-top: 8px;
    //width: 390px;
    max-height: 400px;
    padding: 12px 0;
`

const SignOutDiv = styled.div`
    padding: 8px 28px 8px 16px;
`

export const HeaderUser = ({
    name,
    email,
    onSignOutClick,
}: {
    name: string
    email: string
    onSignOutClick: () => void
}) => {
    const [userMenuShown, setUserMenuShown] = useState(false)
    const ref = useRef()

    const handleTriggerClick = () => setUserMenuShown(true)
    useOnClickOutside(ref, () => setUserMenuShown(false))
    return (
        <div ref={ref}>
            <RowDiv onClick={handleTriggerClick}>
                <NameTypography type={TypographyType.Body}>
                    {name ?? email}
                </NameTypography>
                <Avatar name={name} email={email} />
            </RowDiv>
            {userMenuShown && (
                <UserMenuDiv>
                    <SignOutDiv onClick={onSignOutClick}>
                        <Typography type={TypographyType.Body}>
                            Sign out
                        </Typography>
                    </SignOutDiv>
                </UserMenuDiv>
            )}
        </div>
    )
}
