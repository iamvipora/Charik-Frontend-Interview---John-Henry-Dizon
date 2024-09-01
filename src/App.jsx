import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Index from './pages/Index'
import Pricing from './pages/Pricing'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    // Website routing
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<Index />}/>
        <Route path='/pricing' element={<Pricing />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
