import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles';

import {theme} from './components/core'
import ApplicationBarController from "./controllers/ApplicationBarController";
import DefaultContent from "./components/DefaultContent/DefaultContent";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="cvd">
              <ApplicationBarController drawerWidth={225}
                  title={process.env.REACT_APP_WEBSITE_NAME}
                  github={process.env.REACT_APP_GITHUB_URL} />
              <div id="cvd-main-content">
                  <main>
                      <DefaultContent />
                  </main>
              </div>

          </div>
      </ThemeProvider>
  );
}

export default App;
