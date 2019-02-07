import React, { Fragment } from 'react';
import { Avatar, CssBaseline, Paper } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/AccountCircle';
import { PropTypes } from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import authStyle from '../../../../static/styles/authFormStyle.js';

const AuthForm = (props) => {
    const {
        classes,
        onSubmit,
        formLabel,
        renderInputFields,
        authButton,
        switchLink,
        linkWord,
        errors,
        onChange,
        formHasError,
    } = props;
    return (
        <Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <PersonIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {formLabel}
                    </Typography>

                    <form className={classes.form} onSubmit={onSubmit}>
                        { formLabel === 'Sign-up' || formLabel === 'Admin Sign-up'
                            ? renderInputFields(
                                classes.formControl,
                                !!errors.username,
                                'userName',
                                'Username',
                                'userName',
                                onChange('username'),
                                'text',
                                'userName',
                                'true',
                                true,
                                errors.username,
                            )
                            : renderInputFields(
                                classes.formControl,
                                false,
                                'userName',
                                'Username',
                                'userName',
                                onChange('username'),
                                'text',
                                'userName',
                                'true',
                                true,
                                '',
                            )
                        }
                        {
                            (formLabel === 'Sign-up' || formLabel === 'Admin Sign-up') &&
                            renderInputFields(
                                classes.formControl,
                                !!errors.email,
                                'email',
                                'email',
                                'email',
                                onChange('email'),
                                'email',
                                'email',
                                'true',
                                false,
                                errors.email,
                            )
                        }
                        {
                            (formLabel === 'Sign-up' || formLabel === 'Admin Sign-up') &&
                            renderInputFields(
                                classes.formControl,
                                !!errors.contact,
                                'contact',
                                'Contact',
                                'contact',
                                onChange('contact'),
                                'text',
                                'contact',
                                'true',
                                false,
                                errors.contact,
                            )
                        }
                        {
                            formLabel === 'Sign-up' || formLabel === 'Admin Sign-up'
                                ? renderInputFields(
                                classes.formControl,
                                !!errors.password,
                                'password',
                                'Password',
                                'adornment-password',
                                onChange('password'),
                                'password',
                                'password',
                                'false',
                                false,
                                errors.password,
                                )
                                : renderInputFields(
                                classes.formControl,
                                false,
                                'password',
                                'Password',
                                'adornment-password',
                                onChange('password'),
                                'password',
                                'password',
                                'false',
                                false,
                                '',
                                )
                        }
                        {
                            formLabel === 'Sign-up' || formLabel === 'Admin Sign-up'
                                ? <Button disabled={formHasError()} variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>
                                    {authButton}
                                    <Icon className={classes.rightIcon}>send</Icon>
                                </Button>
                                : <Button disabled={false} variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>
                                    {authButton}
                                    <Icon className={classes.rightIcon}>send</Icon>
                                </Button>
                        }

                    </form>
                    <Button className={classes.typography} component={Link} to={switchLink}>
                        <Typography>{linkWord}</Typography>
                    </Button>
                </Paper>
            </main>
        </Fragment>
    );
};

AuthForm.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    renderInputFields: PropTypes.func,
    classes: PropTypes.shape(),
    formLabel: PropTypes.string,
    authButton: PropTypes.string,
    switchLink: PropTypes.string,
    linkWord: PropTypes.string,
    errors: PropTypes.shape(),
    formHasError: PropTypes.func,
};

AuthForm.defaultProps = {
    onSubmit: () => {},
};

export default withStyles(authStyle)(AuthForm);
