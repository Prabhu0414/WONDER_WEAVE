import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomeBanner'
// import { Navbar } from './Components/Navbar'
//import { AuthPage } from './Pages/AuthPage'



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
