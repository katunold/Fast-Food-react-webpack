import { indigo, red } from '@material-ui/core/colors';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const AppTheme = createMuiTheme({
    typography: {
        fontFamily: [
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Arial',
            'sans-serif'
        ].join(','),
        useNextVariants: true
    },
    palette: {
        secondary: {
            main: indigo[600],
            contrastText: '#fff'
        },
        primary: {
            main: indigo[500],
            contrastText: '#fff'
        },
        error: {
            light: red[300],
            main: red[500],
            dark: red[700]
        }
    }
});

export default AppTheme;
