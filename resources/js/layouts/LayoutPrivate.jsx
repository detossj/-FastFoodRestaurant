import React from 'react'
import Footer from '../components/Footer'
import TopBar from '../components/TopBar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutPrivate = () => {
  return (
    <>
      <TopBar/>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default LayoutPrivate