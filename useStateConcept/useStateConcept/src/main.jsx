import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Utility from './Utility.jsx'

createRoot(document.getElementById('root')).render(
  // <App/>
  <Utility/>
)

// createRoot(document.getElementById('root1')).render(
//   <StrictMode>
//     <Utility></Utility>
//   </StrictMode>,
// )

