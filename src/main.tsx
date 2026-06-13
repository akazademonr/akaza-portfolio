import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { SmoothScrollProvider } from './providers/SmoothScrollProvider'
import ScrollToTop from './components/ScrollToTop'

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

if (window.location.hash) {
  window.scrollTo(0, 0)
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <SmoothScrollProvider>
      <ScrollToTop />
      <App />
    </SmoothScrollProvider>
  </BrowserRouter>
)
