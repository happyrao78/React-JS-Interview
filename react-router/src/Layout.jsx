import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
        <Header />
        <Outlet />//this outlet component keeps the header and footer fixed for all the pages.
        <Footer />
    </>
  )
}

export default Layout