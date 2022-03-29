import { Provider } from 'react-redux'
import { store } from './store/store'
import { AppRouter } from './routers/AppRouter'

export const AlquimiaStore = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}