import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { CartProvider } from './Context/Cardcontext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <GoogleOAuthProvider clientId="515829856340-07fblbu9f1uflektafabarmsmt315rdc.apps.googleusercontent.com">
      <CartProvider>
         <App />
       </CartProvider>
      </GoogleOAuthProvider>
    </HashRouter>
  </StrictMode>,
)
