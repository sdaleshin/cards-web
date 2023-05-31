import { TranslationPage } from './pages/translation/TranslationPage'
import { Route, Routes, Navigate } from 'react-router'
import { HomePage } from './pages/home/HomePage'
import {
    getCardsUrl,
    getFolderEditUrl,
    getFoldersListUrl,
    getHomeUrl,
    getTranslationUrl,
} from './utils/urls'
import { CardsPage } from './pages/cards/CardsPage'
import { FoldersListPage } from './pages/folders/FoldersListPage'
import { FolderPage } from './pages/folders/FolderPage'
import { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedIn } from './redux/auth/auth.slice'
import { GlobalStyle } from './styles/GlobalStyle'

const Protected = ({
    children,
    loggedIn,
}: {
    children: ReactElement
    loggedIn: boolean
}) => {
    if (loggedIn) {
        return children
    } else {
        return <Navigate to={getHomeUrl()} />
    }
}

export const App = () => {
    const loggedIn = useSelector(selectLoggedIn)
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path={getHomeUrl()} element={<HomePage />} />
                <Route
                    path={getTranslationUrl()}
                    element={
                        <Protected loggedIn={loggedIn}>
                            <TranslationPage />
                        </Protected>
                    }
                />
                <Route
                    path={getCardsUrl()}
                    element={
                        <Protected loggedIn={loggedIn}>
                            <CardsPage />
                        </Protected>
                    }
                />
                <Route
                    path={getFoldersListUrl()}
                    element={
                        <Protected loggedIn={loggedIn}>
                            <FoldersListPage />
                        </Protected>
                    }
                />
                <Route
                    path={getFolderEditUrl()}
                    element={
                        <Protected loggedIn={loggedIn}>
                            <FolderPage />
                        </Protected>
                    }
                />
                <Route
                    path="*"
                    element={
                        <div>
                            <h2>404 Page not found</h2>
                        </div>
                    }
                />
            </Routes>
        </>
    )
}
