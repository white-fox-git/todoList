import React from 'react'
import ReactDOM from 'react-dom/client'
import {Reset} from 'styled-reset';
import {Provider} from 'react-redux';
import store from './util/store';
import Router from './Router';
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <Reset />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
