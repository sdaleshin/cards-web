import { TranslationPage } from './pages/translation/TranslationPage'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/home/HomePage'
import {
    getCardsUrl,
    getFoldersUrl,
    getHomeUrl,
    getTranslationUrl,
} from './utils/urls'
import { CardsPage } from './pages/cards/CardsPage'
import { FoldersPage } from './pages/folders/FoldersPage'

export const App = () => {
    return (
        <Routes>
            <Route path={getHomeUrl()} element={<HomePage />} />
            <Route path={getTranslationUrl()} element={<TranslationPage />} />
            <Route path={getCardsUrl()} element={<CardsPage />} />
            <Route path={getFoldersUrl()} element={<FoldersPage />} />
        </Routes>
    )
}
