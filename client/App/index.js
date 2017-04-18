import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500} from 'material-ui/styles/colors';
import DevTools from '../components/DevTools';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500
  }
});

const style = {
  height: '100%'
};

export default ({children}) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div style={style}>
      {children}
      {window.devToolsExtension ? null : <DevTools />}
    </div>
  </MuiThemeProvider>
);