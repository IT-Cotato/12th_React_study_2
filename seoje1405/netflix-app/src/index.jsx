import './index.css'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDom from 'react-dom'
import reportWebVitals from './reportWebVitals'

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
  document.getElementById('root')
)


reportWebVitals();

