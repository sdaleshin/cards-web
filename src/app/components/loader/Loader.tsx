import styled, { keyframes } from 'styled-components'
import { Colors } from '../../styles/colors'

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const StyledDiv = styled.div`
    border: 8px solid ${Colors.Gray90};
    border-radius: 50%;
    border-top: 8px solid ${Colors.Blue60};
    border-right: 8px solid ${Colors.Yellow60};
    border-bottom: 8px solid ${Colors.Red60};
    width: 60px;
    height: 60px;
    animation: ${spinAnimation} 1.5s linear infinite;
`

export const Loader = () => <StyledDiv />
