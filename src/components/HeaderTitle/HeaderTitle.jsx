import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

function HeaderTitle(props) {
    const useStyles = makeStyles({
        root: {
            width: '100%',
            maxWidth: 500,
        },
    });

    const classes = useStyles();

    return (
        <Typography variant="h6"
            color={props.color}
            align={props.align}
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
