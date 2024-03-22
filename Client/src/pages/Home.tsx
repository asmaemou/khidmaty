import React from 'react'
import HomePage from '../Components/ReactComponents/HomePage'
import Navbar from '../Components/ReactComponents/NavBar'
import FooterComp from '../Components/ReactComponents/FooterComp'
export default function Home() {
  return (
    <div>
        <Navbar/>
      <HomePage/>
      <FooterComp />
    </div>
  )
}
