import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './hello.jsx'
import Random from './Random.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div>
    <Hello />
    <App />
    <Random />
    </div>

  </StrictMode>,
)
