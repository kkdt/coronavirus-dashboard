import React from 'react';
import './DefaultContent.css'

/**
 * Captures the default header content from reactjs 'create-app' command.
 *
 * @param props (title) is optional, default to <code>REACT_APP_WEBSITE_LOGO</code>
 * @returns {*}
 * @constructor
 */
function DefaultContent(props) {
    return (
        <div className="cvd-default-content">
            <header className="cvd-header">
                <img src={props.title || process.env.REACT_APP_WEBSITE_LOGO} className="cvd-logo" alt="logo" />
                <p/>
            </header>
        </div>
    );
}

export default DefaultContent;