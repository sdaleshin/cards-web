import md5 from 'md5'
import styled from 'styled-components'

const StyledImg = styled.img`
    height: 36px;
    width: 36px;
    border-radius: 36px;
    overflow: hidden;
`

export const Avatar = ({ name, email }: { name: string; email: string }) => {
    return <StyledImg src={`https://www.gravatar.com/avatar/${md5(email)}`} />
}
