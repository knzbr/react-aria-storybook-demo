import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { HelloWorld } from './components/HelloWorld/HelloWorld'
import './styles.css'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HelloWorld />
    </StrictMode>
  )
}
