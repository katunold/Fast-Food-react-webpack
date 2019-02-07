const authStyle = theme => ({
    layout: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginRight: 'auto',
            marginLeft: 'auto',
        }
    },
    formControl: {
        minWidth: '50%',
    },
    paper: {
        ...theme.mixins.gutters(),
        marginTop: theme.spacing.unit * 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    typography: {
        marginTop: theme.spacing.unit,
    },
    textField: {
        flexBasis: 200,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    }
});

export default authStyle;
