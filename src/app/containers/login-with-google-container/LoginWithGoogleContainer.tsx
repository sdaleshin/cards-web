import { authWithGoogleCredentials } from '../../redux/auth/auth.slice'
import { useDispatch } from 'react-redux'
import { LoginWithGoogle } from '../../components/login-with-google/LoginWithGoogle'

export const LoginWithGoogleContainer = () => {
    const dispatch = useDispatch()
    const handleLoginWithGoogleResponse = ({
        credential,
        clientId,
    }: {
        credential: string
        clientId: string
    }) => {
        dispatch(
            authWithGoogleCredentials({
                credential: credential,
                clientId: clientId,
            }),
        )
    }
    return (
        <LoginWithGoogle
            onSuccessResponseFromGoogle={handleLoginWithGoogleResponse}
        />
    )
}
