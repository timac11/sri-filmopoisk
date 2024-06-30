import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./app/App.tsx";
import {BrowserRouter} from "react-router-dom";

import { store } from './app/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
