import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Api from './Context Api/Api.jsx'
import { BrowserRouter } from "react-router-dom"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Api>
        <App />
      </Api>
    </BrowserRouter>
  </React.StrictMode>,
)
