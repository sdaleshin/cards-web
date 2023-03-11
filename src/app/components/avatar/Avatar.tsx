import md5 from 'md5'
import styled from 'styled-components'

const StyledImg = styled.img`
    height: 24px;
    width: 24px;
    border-radius: 24px;
    overflow: hidden;
`

export const Avatar = ({ name, email }: { name: string; email: string }) => {
    return <StyledImg src={`https://www.gravatar.com/avatar/${md5(email)}`} />
}
