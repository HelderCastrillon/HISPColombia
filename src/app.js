//React Library
import React from 'react';
import ReactDOM from 'react-dom';
//Materials Components
import { MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//My Components
import theme from './theme'

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
       {"Hola estudiantes"}
      </MuiThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));