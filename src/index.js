import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@material-ui/core'
import App from './components/App';


const root = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  root
);


