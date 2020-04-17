import React from "react";
import PropTypes from "prop-types";
import {Route} from "react-router-dom";

/**
 * A wrapper for the underlying <Route> object.
 *
 * @param Component The view controller component.
 * @param rest Spread operator to pass all other parameters that our component receives to the <Route> component.
 * @returns {*}
 * @constructor
 */
function ApplicationRoute({
    component: controller,
    ...rest
})
{
    return <Route {...rest} component={controller}/>;
}

export default ApplicationRoute;

ApplicationRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};
