import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../../pages/Homepage/Home'
import Createlibrary from '../../pages/CreateLibrary/Createlibrary'
import Single_view from '../../pages/Singleview/Single_view'
import Addbook from '../../pages/AddBook/Addbook'
import Landing from '../../pages/Landingpage/Landing'
import Signup from '../Signup/Signup'
import Signin from '../SignIn/Signin'

function Layout() {

  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/' || location.pathname === '/signin' || location.pathname === '/signup' || location.pathname.startsWith('/bookdetails') || location.pathname.startsWith('/addbook')||location.pathname === '/addbook';

  return (
    <div>

      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/createlibrary' element={<Createlibrary />} />
        <Route path='/bookdetails/:id' element={<Single_view />} />
        <Route path='/addbook' element={<Addbook />} />
        <Route path='/addbook/:id' element={<Addbook />} />

      </Routes>
      {!hideHeaderFooter && <Footer />}


    </div>
  )
}

export default Layout
