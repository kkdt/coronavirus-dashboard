import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import {actions, theme} from './components/core'
import ApplicationContainer from "./ApplicationContainer";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ApplicationContainer
                title={process.env.REACT_APP_WEBSITE_NAME}
                github={process.env.REACT_APP_GITHUB_URL}
                actions={actions}
                drawerWidth={225}/>
        </ThemeProvider>
    );
}

export default App;
