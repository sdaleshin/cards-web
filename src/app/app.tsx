import { Provider } from 'react-redux'
import { store } from './redux/store'
import { TranslationPage } from './pages/translation/TranslationPage'
import { Routes, Route } from 'react-router'
import HomePage from './pages/home/HomePage'

const App = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/translation" element={<TranslationPage />} />
            </Routes>
        </Provider>
    )
}
export default App
