import React from 'react'
import '../HomeScreen/HomeScreen.css'
import Nav from '../../Components/Nav/Nav'
import Banner from '../../Components/Banner/Banner'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        {/* This is the home screen. */}
        {/* we'll need nav, banner, and row, on this page. */}
        
        <Nav/> 

        <Banner/>


    </div>
  )
}

export default HomeScreen;