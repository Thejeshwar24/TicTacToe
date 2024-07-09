import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 className='header'>Tic Tac Toe</h1>
    <App />
  </React.StrictMode>,
)
