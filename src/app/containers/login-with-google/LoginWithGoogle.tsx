import { authWithGoogleCredentials } from '../../redux/auth/auth.slice'
import { getClientStore } from '../../../client/getClientStore'

if (typeof window !== 'undefined') {
    // @ts-ignore
    window.handleLoginWithGoogleResponse = (response: any) => {
        getClientStore().dispatch(
            authWithGoogleCredentials({
                credential: response.credential,
                clientId: response.clientId,
            }),
        )
    }
}

export const LoginWithGoogle = () => {
    return (
        <>
            <div
                id="g_id_onload"
                data-client_id="588137183052-pb50haapd7530jhmdjomnaad8qn2sguh.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-callback="handleLoginWithGoogleResponse"
                data-auto_prompt="false"
            />

            <div
                className="g_id_signin"
                data-type="standard"
                data-shape="pill"
                data-theme="filled_blue"
                data-text="signin_with"
                data-size="large"
                data-logo_alignment="left"
            />
        </>
    )
}
