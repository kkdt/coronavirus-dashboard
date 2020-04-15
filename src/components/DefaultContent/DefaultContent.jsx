import React from 'react';
import Clock from "../Clock/Clock";

/**
 * Captures the default header content from reactjs 'create-app' command.
 *
 * @param props (title) is optional, default to <code>REACT_APP_WEBSITE_LOGO</code>
 * @returns {*}
 * @constructor
 */
function DefaultContent(props) {
    return (
        <header className="cvd-header">
            <img src={props.title || process.env.REACT_APP_WEBSITE_LOGO} className="cvd-logo" alt="logo" />
            <p/>
            <Clock />
        </header>
    );
}

export default DefaultContent;