import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

// Keeping the constant local to the component if not needed externally.
const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});

function HeaderTitle(props) {
    const classes = useStyles();

    return (
        <Typography variant="h6"
            color={props.color || "black"}
            align={props.align || "left"}
            className={props.className || classes.root}
        >
            {props.children}
        </Typography>
    );
}

export default HeaderTitle;

HeaderTitle.propTypes = {
    children: PropTypes.node,
};
