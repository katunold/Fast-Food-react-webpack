import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    }
};

const NavBar = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <i className="fas fa-utensils fa-2x" />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        <span>Fast Food Fast</span>
                    </Typography>
                    <Button color="inherit">
                        <i className="fa fa-home" />
                        <span>Home</span>
                    </Button>
                    <Button color="inherit">
                        <i className="fa fa-info" />
                        <span>About</span>
                    </Button>
                    <Button color="inherit">
                        <i className="fa fa-sign-out-alt " />
                        <span>Arnold</span>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(NavBar);
