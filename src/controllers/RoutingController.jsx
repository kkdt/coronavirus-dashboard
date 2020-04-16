import React from 'react';
import {Router, Switch} from 'react-router-dom';

import history from '../components/core/history';

function RoutingController(props) {
    return (
        <Router history={history}>
            {props.children}
            <div id="cvd-main-content">
                <main>
                    <Switch>
                        {props.routes}
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default RoutingController;
