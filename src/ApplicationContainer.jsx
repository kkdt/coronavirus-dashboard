import React from "react";
import {Router} from 'react-router-dom';
import PropTypes from "prop-types";
import {makeStyles} from '@material-ui/core/styles';

import history from './components/core/history';
import ApplicationHeaderController from "./controllers/ApplicationHeaderController";
import clsx from "clsx";
import AppRoutes from "./AppRoutes";

// https://stackoverflow.com/questions/56111294/how-to-use-theme-and-props-in-makestyles
// Using the parent 'props' in makeStyles.
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // backgroundColor: "black",
        // fontColor: "white"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
    },
    contentShift: _props => ({
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: _props.drawerWidth,
    })
}));

export default function ApplicationContainer(props) {
    const actions = props.actions;
    const drawerWidth = props.drawerWidth;
    const classes = useStyles(props); // forward the parent props
    const title = props.title || "";
    const github = props.github || "https://github.com";

    const [open, drawerOpen] = React.useState(false);

    return(
        <div className={classes.root}>
            <Router history={history}>

                {
                /*
                 * navigation bar and action menus
                 */
                }
                <ApplicationHeaderController className={classes.root}
                     actions={actions}
                     handleOpen={drawerOpen}
                     drawerWidth={drawerWidth}
                     title={title}
                     github={github} />

                {
                /*
                 * main content
                 */
                }
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <AppRoutes/>
                </main>
            </Router>
        </div>
    );
}

ApplicationContainer.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string]).isRequired,
    actions: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    drawerWidth: PropTypes.oneOfType([PropTypes.number]).isRequired
};
