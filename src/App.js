import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles';

import {theme} from './components/core'
import ApplicationBarController from "./controllers/ApplicationBarController";
import {routes} from './AppRoutes'
import RoutingController from "./controllers/RoutingController";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="cvd">
                <RoutingController routes={routes}>
                    <ApplicationBarController drawerWidth={225}
                        title={process.env.REACT_APP_WEBSITE_NAME}
                        github={process.env.REACT_APP_GITHUB_URL} />
                </RoutingController>
            </div>
        </ThemeProvider>
    );
}

export default App;
