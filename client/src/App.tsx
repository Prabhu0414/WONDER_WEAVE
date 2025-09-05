import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomeBanner'
import { AuthPage } from './Pages/AuthPage'
// import { Navbar } from './Components/Navbar'
//import { AuthPage } from './Pages/AuthPage'



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/AuthPage' element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
