import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'


const Layouts = ({ children }) => {
  return (
    <>
        <Header />
            <Outlet />
            <Home />
        <Footer />
    </>
  )
}

export default Layouts