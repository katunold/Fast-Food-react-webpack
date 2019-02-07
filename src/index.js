import React from 'react';
import ReactDOM from 'react-dom';
import './static/styles/index.scss';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppTheme from './static/themes/index.js';
import Routes from "./routes/index.jsx";

ReactDOM.render(
    <MuiThemeProvider theme={AppTheme}>
        <Routes/>
    </MuiThemeProvider>,
    document.getElementById('root') || document.createElement('div')
);

