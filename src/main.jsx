import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
/* import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; */
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* import { BrowserRouter } from 'react-router-dom'; */
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer style={{zIndex : "9999999999999"}}  position="top-center" />
  </React.StrictMode>,
)
