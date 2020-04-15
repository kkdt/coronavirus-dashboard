import React from "react";

import AppBar from '@material-ui/core/AppBar';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';

import HeaderTitle from "../HeaderTitle/HeaderTitle";

function HeaderBar(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color="default" position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <HeaderTitle className={classes.title}>{props.title || process.env.REACT_APP_WEBSITE_NAME}</HeaderTitle>
                    <Button color="inherit" target="_blank" href={props.github || process.env.REACT_APP_GITHUB_URL}><GitHubIcon/></Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default HeaderBar;