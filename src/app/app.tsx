import { TranslationPage } from './pages/translation/TranslationPage'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/home/HomePage'

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/translation" element={<TranslationPage />} />
        </Routes>
    )
}
