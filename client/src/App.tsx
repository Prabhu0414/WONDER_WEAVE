import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomeBanner'
import { AuthPage } from './Pages/AuthPage'
import TravelItineraryPage from './Pages/TravelItineraryPage'




function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/AuthPage' element={<AuthPage />} />
        <Route path='/TravelItineraryPage' element={<TravelItineraryPage />} />
      </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
