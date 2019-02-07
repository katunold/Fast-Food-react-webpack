import React, { Component } from 'react';
import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import AuthForm from '../../presentational/auth/index.jsx';
import {
    validateContact,
    validateEmail,
    validatePassword,
    validateUsername
} from '../../../../utils/validators.js';
import { capitalizeWord } from '../../../../utils/index.js';

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

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

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
    };

    handleLogin = (event) => {
        event.preventDefault();
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
        const { location } = this.props;
        const formCustom = location.pathname === '/login'
            ? {
                formLabel: 'Login',
                authButton: 'Login',
                switchLink: '/signup',
                linkWord: 'Do not have an account? Sign-up.',
                onSubmit: this.handleLogin,
            }
            : {
                formLabel: 'Sign-up',
                authButton: 'Register',
                switchLink: '/login',
                linkWord: 'Already have an account? Login.',
                onSubmit: this.handleSignUp,
            };
        return (
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
        );
    }
}

export default Authentication;
