import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import AmbientBackground from './components/AmbientBackground'
import Navbar from './components/Navbar'
import PageTransition from './components/PageTransition'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'

function App() {
  const location = useLocation()

  return (
    <>
      <AmbientBackground />
      <div className="flex flex-col items-center w-full min-h-screen">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <AboutPage />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  )
}

export default App
