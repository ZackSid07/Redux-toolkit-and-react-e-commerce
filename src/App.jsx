import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const IndexPage = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='*' Component={ErrorPage}/>
          </Routes>
        <Footer/>  
      </BrowserRouter>
    </>
  )
}

export default IndexPage