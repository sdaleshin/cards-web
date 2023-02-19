import { Provider } from 'react-redux'
import { store } from './redux/store'
import { TranslationPage } from './pages/translation/TranslationPage'

const App = () => {
    return (
        <Provider store={store}>
            <TranslationPage />
        </Provider>
    )
}
export default App
