import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from "./Context.jsx"

createRoot(document.getElementById('root')).render(
  // <ThemeContext.Provider value="dark">
  //   <App />
  // </ThemeContext.Provider>,
  <>
  <App />
  </>,
)
