import React from 'react';
import ReactDOM from 'react-dom';
import './root.css';
import Main from './Main';
import { grommet, Grommet } from "grommet";
import  GlobalStyles from './cssReset';

ReactDOM.render(
  <React.StrictMode>
     <Grommet theme={grommet}>
      <GlobalStyles/>
    <Main />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

