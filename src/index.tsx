import React from 'react'
import ReactDOM from 'react-dom/client'
import {Reset} from 'styled-reset';
import Main from './component/main';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Reset />
    <Main />
  </React.StrictMode>
)
