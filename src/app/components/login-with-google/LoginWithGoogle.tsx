import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setLoggedIn } from '../../redux/auth/auth.slice'

declare var google: any

const LoginWithGoogle = () => {
    const buttonRef = useRef()
    const dispatch = useDispatch()

    const handleLoginWithGoogleResponse = (response: any) => {
        dispatch(setLoggedIn(true))
        console.log('response', response)
    }

    useEffect(() => {
        window.onload = function () {
            google.accounts.id.initialize({
                client_id:
                    '588137183052-pb50haapd7530jhmdjomnaad8qn2sguh.apps.googleusercontent.com',
                callback: handleLoginWithGoogleResponse,
            })
            google.accounts.id.prompt()
            // google.accounts.id.renderButton(
            //     googleButton.current,
            //     { theme: "outline", size: "large" }
            // )
        }
    }, [])

    return (
        <>
            <script src="https://accounts.google.com/gsi/client" async defer />
            <div ref={buttonRef}></div>
        </>
    )
}

export default LoginWithGoogle
