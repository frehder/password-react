import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { TPassword } from './store/password/password.interfaces';
import { setPassword } from './store/password/password.slice';
import store from './store/store';
import theme from './theme';
import { getNewPassword } from './utils/password.utils';
import App from './views/App';
import { GlobalStyle } from './views/base.styles';

getNewPassword()
    .then((newPassword: TPassword) => store.dispatch(setPassword(newPassword)))
    .catch((error) => console.error(error));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
