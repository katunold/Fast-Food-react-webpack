import React, {Component, Fragment} from 'react';
import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import AuthForm from '../../presentational/auth/index.jsx';
import {
    validateContact,
    validateEmail,
    validatePassword,
    validateUsername
} from '../../../../utils/validators.js';
import { capitalizeWord } from '../../../../utils/index.js';
import {connect} from "react-redux";
import {authAction} from "../../../redux/actions/auth/index.js";
import {API} from "../../../constants/index.js";
import FastFoodSnackBar from "../snackBar/index.jsx";
import CircularProgressLoader from "../../presentational/progress/index.jsx";

class Authentication extends Component {

    validators = {
        validateUsername,
        validateEmail,
        validateContact,
        validatePassword,
    };

    initialState = {
        username: '',
        email: '',
        contact: '',
        user_type: 'client',
        password: '',
        isLogin: true,
        errors: {
            username: '',
            email: '',
            contact: '',
            password: '',
        },
        loader: {
            success: false,
            loading: false,
        }
    };

    snack = {
        message: '',
        open: false,
        variant: 'info'
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    componentWillReceiveProps(nextProps) {
        const { auth } = nextProps;
        const {status, message} = auth;
        const { endpoint } = this.props.match.params;
        if (!!message) {
            this.snack.message = message;
            this.snack.open = true;
            this.snack.variant = status === 'success' ? 'success' : 'error';
            this.setState({ loader: { loading: false } });
        }else {
            this.snack.open = false;
        }

        if ((status==='success')) {
            endpoint === 'login'
                ? this.redirect('home')
                : this.redirect('login');
        }
    }

    redirect = (endpoint) => {
        this.setState({ ...this.initialState });
        window.location.assign(endpoint);
    };

    renderInputFields = (
        form,
        errors,
        htmlFor,
        label,
        id,
        change,
        type,
        name,
        autoComplete,
        autoFocus,
        errorMessage
    ) => (
        <FormControl className={form} margin="normal" required fullWidth error={errors}>
            <InputLabel htmlFor={htmlFor}>{label}</InputLabel>
            <Input id={id} onChange={change} type={type} name={name} autoComplete={autoComplete} autoFocus={autoFocus} />
            <FormHelperText error={errors}>
                {errorMessage}
            </FormHelperText>
        </FormControl>
    );

    handleSignUp = (event) => {
        event.preventDefault();
        const { dispatch, match } = this.props;
        if(!this.formHasError()) {
            const { username, email, contact, user_type, password } = this.state;
            const signupdata = { username, email, contact, user_type, password };
            match.params.endpoint === 'admin'
                ? signupdata.user_type = 'admin'
                : null;
            dispatch(authAction(signupdata, API.SIGN_UP_URL));
            this.setState({loader: { loading: true}})
        }
    };

    handleLogin = (event) => {
        event.preventDefault();
        const { dispatch } = this.props;
        const { username, password } = this.state;
        const loginData = {username, password};
        dispatch(authAction(loginData, API.LOGIN_URL));
        this.setState({loader: { loading: true}})
    };

    onChange = name => (event) => {
        const { value } = event.target;
        this.setState(prevState => ({
            [name]: value,
            errors: {
                ...prevState.errors,
                [name]: this.validators[`validate${capitalizeWord(name)}`](value),
            }
        }));

    };

    handleSnackClose = (event, reason) => {
        this.snack.open = false;
        this.setState({});
    };

    formHasError = () => {
        const {
            username, email, contact, password
        } = this.state;
        return !!(
            validateUsername(username) ||
            validateEmail(email) ||
            validateContact(contact) ||
            validatePassword(password)
        );
    };

    render() {
        const { endpoint } = this.props.match.params;
        const { open, message, variant } = this.snack;
        const { loader } = this.state;
        const formCustom = endpoint === 'login'
            ? {
                formLabel: 'Login',
                authButton: 'Login',
                switchLink: '/signup',
                linkWord: 'Do not have an account? Sign-up.',
                onSubmit: this.handleLogin,
            }
            : endpoint === "admin"
                ? {
                formLabel: 'Admin Sign-up',
                authButton: 'Register',
                switchLink: '/login',
                linkWord: 'Already have an account? Login.',
                onSubmit: this.handleSignUp,
                }
                : {
                    formLabel: 'Sign-up',
                    authButton: 'Register',
                    switchLink: '/login',
                    linkWord: 'Already have an account? Login.',
                    onSubmit: this.handleSignUp,
                };
        return (
            <Fragment>
                <CircularProgressLoader {...loader} />
                <FastFoodSnackBar
                    variant={variant}
                    open={open}
                    handleClose={this.handleSnackClose}
                    message={message}
                />
                <AuthForm
                    onSubmit={formCustom.onSubmit}
                    renderInputFields={this.renderInputFields}
                    onChange={this.onChange}
                    formLabel={formCustom.formLabel}
                    authButton={formCustom.authButton}
                    switchLink={formCustom.switchLink}
                    linkWord={formCustom.linkWord}
                    formHasError={this.formHasError}
                    {...this.state}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({auth: state.authReducer});
const mapDispatchToProps = dispatch => ({ dispatch });


export { Authentication as AuthenticationTest };

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
