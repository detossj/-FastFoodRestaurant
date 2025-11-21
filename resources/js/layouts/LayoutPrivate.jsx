import React from 'react'
import Footer from '../components/Footer'
import TopBar from '../components/TopBar'
import { Outlet } from 'react-router-dom'

const LayoutPrivate = () => {
  return (
    <>
      <TopBar/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default LayoutPrivate