import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomeBanner'
import { AuthPage } from './Pages/AuthPage'
import TravelItineraryPage from './Pages/TravelItineraryPage'
import SearchPage from './Pages/SearchPage'




function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/AuthPage' element={<AuthPage />} />
        <Route path='/TravelItineraryPage' element={<TravelItineraryPage />} />
        <Route path='/SearchPage' element={<SearchPage />} />
      </Routes>
    </BrowserRouter>


    
    </>
  )
}

export default App
