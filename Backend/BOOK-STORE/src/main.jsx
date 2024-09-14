import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <div className="dark:bg-slate-900 dark:text-white-600">
   <App/>
   </div>
  
  </BrowserRouter>
   
  ,
)


// strict mode se same component 2 time render karta hai