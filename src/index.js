import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './static/styles/index.scss';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppTheme from './static/themes/index.js';
import Routes from "./routes/index.jsx";
import store from "./js/redux/store/index.js";

ReactDOM.render(
    <MuiThemeProvider theme={AppTheme}>
        <Provider store={store}>
            <Routes/>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root') || document.createElement('div')
);

