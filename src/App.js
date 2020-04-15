import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles';

import {theme} from './components/core'
import Clock from './components/Clock/Clock'
import HeaderBar from "./components/HeaderBar/HeaderBar";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="cvd">
              <HeaderBar title={process.env.REACT_APP_WEBSITE_NAME} github={process.env.REACT_APP_GITHUB_URL} />
              <header className="cvd-header">
                  <img src={process.env.REACT_APP_WEBSITE_LOGO} className="cvd-logo" alt="logo" />
                  <p/>
                  <Clock />
              </header>
          </div>
      </ThemeProvider>
  );
}

export default App;
