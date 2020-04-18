import React, {useEffect} from "react";
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import HeaderTitle from "../HeaderTitle/HeaderTitle";
import './HeaderBar.css'

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
    hide: {
        display: 'none',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: _props => ({
        width: `calc(100% - ${_props.drawerWidth}px)`,
        marginLeft: _props.drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    drawer: _props => ({
        width: _props.drawerWidth,
        flexShrink: 0,
    }),
    drawerPaper: _props => ({
        width: _props.drawerWidth,
    }),
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }
}));

function HeaderBar(props) {
    const theme = useTheme();
    const handleOpen = props.handleOpen;
    const [open, setOpen] = React.useState(false);
    const classes = useStyles(props);

    const openMenu = () => {
        setOpen(true);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    useEffect(() => {
        if(handleOpen !== undefined) {
            handleOpen(open);
        }
    }, [open, handleOpen]);

    return (
        <div id="cvd-header-bar" className={classes.root}>
            <AppBar color="default" position="static"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={openMenu}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <HeaderTitle className={classes.title}>{props.title || ""}</HeaderTitle>
                    <Button color="inherit" target="_blank" href={props.github || "https://github.com"}><GitHubIcon/></Button>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={closeMenu}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {props.children}
                </List>
            </Drawer>
        </div>
    );
}

export default HeaderBar;