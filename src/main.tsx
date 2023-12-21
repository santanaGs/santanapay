import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AppContextComponent from './context/context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContextComponent>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AppContextComponent>
)
