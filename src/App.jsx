import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Pricing from './pages/Pricing'
import './App.css'

function App() {
  return (
    // Website routing
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />}/>
        <Route path='/pricing' element={<Pricing />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
