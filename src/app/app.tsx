import { TranslationPage } from './pages/translation/TranslationPage'
import { Routes, Route } from 'react-router'
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

export const App = () => {
    return (
        <Routes>
            <Route path={getHomeUrl()} element={<HomePage />} />
            <Route path={getTranslationUrl()} element={<TranslationPage />} />
            <Route path={getCardsUrl()} element={<CardsPage />} />
            <Route path={getFoldersListUrl()} element={<FoldersListPage />} />
            <Route path={getFolderEditUrl()} element={<FolderPage />} />
        </Routes>
    )
}
