import ReactDOM from 'react-dom';
import { store } from './Store'
import { Provider } from 'react-redux'
import { HashRouter } from "react-router-dom";
import App from './App';

ReactDOM.render(
    <HashRouter>
        {/* Pass the Redux store */}
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);
