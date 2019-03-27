//React Library
import React from 'react';
import ReactDOM from 'react-dom';
//Materials Components
import { MuiThemeProvider } from '@material-ui/core/styles';

//My Components
import theme from './theme'
import Main from './components/main'
function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
       <Main/>
      </MuiThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));