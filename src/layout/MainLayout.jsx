import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import FlowBiteNav from '../components/FlowBiteNav'
// import NavBar from '../components/NavBar'

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
      <FlowBiteNav />
      
      <Outlet />
       </main>
       <footer className="bg-gray-200 p-0 text-center">
      <Footer />
       </footer>
     </div>
  )
}

export default MainLayout
