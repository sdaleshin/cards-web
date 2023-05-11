import { useEffect } from 'react'

type GoogleResponseType = {
    credential: string
    clientId: string
}

export const LoginWithGoogle = ({
    onSuccessResponseFromGoogle,
}: {
    onSuccessResponseFromGoogle: (response: GoogleResponseType) => void
}) => {
    useEffect(() => {
        if (document.readyState === 'complete') {
            initializeLoginWithGoogleBtn()
        } else {
            window.addEventListener('load', initializeLoginWithGoogleBtn)
            // Remove the event listener when component unmounts
            return () =>
                window.removeEventListener('load', initializeLoginWithGoogleBtn)
        }
    }, [])
    const initializeLoginWithGoogleBtn = () => {
        window.google.accounts.id.initialize({
            client_id:
                '588137183052-pb50haapd7530jhmdjomnaad8qn2sguh.apps.googleusercontent.com',
            callback: onSuccessResponseFromGoogle,
        })
        window.google.accounts.id.renderButton(
            document.getElementById('loginWithGoogle'),
            {
                theme: 'outline',
                size: 'large',
                shape: 'rectangular',
                width: 360,
            },
        )
    }
    return <div id="loginWithGoogle" />
}
