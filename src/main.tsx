import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

/* HABILITAR CONDICIONALMENTE EL MOCKING DE MSW */
async function deferRender() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser.ts')

  // `worker.start()` devuelve una promesa que resuelve
  // una vez que el Service Worker está listo para interceptar solicitudes.
  return worker.start()
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
