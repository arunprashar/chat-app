import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthcontextProvider } from './context/AuthContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
    <AuthcontextProvider>
      <SocketContextProvider>
     <App />
      </SocketContextProvider>
    </AuthcontextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
