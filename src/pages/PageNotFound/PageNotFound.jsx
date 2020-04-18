import React from 'react';
import './PageNoteFound.css'

/**
 * Render a page indicating 404.
 *
 * @param props (message) default to "Page Not Found" if not specified.
 * @returns {*}
 * @constructor
 */
export default function PageNotFound(props) {
    const message = props.pageNotFoundMessage || "Page Not Found";

    return (
        <div className="cvd-page-not-found">
            <h1>404: {message}</h1>
        </div>
    );
}
