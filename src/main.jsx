import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WatchLaterProvider } from './context/WatchLaterContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <WatchLaterProvider>
        <App />
      </WatchLaterProvider>
    </BrowserRouter>
  </React.StrictMode>
)