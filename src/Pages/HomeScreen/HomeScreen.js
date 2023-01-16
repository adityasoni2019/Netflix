import React from 'react'
import '../HomeScreen/HomeScreen.css'
import Nav from '../../Components/Nav/Nav'
import Banner from '../../Components/Banner/Banner'
import requests from '../../files/Requests'
import Row from '../../Components/Row/Row.js'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        {/* This is the home screen. */}
        {/* we'll need nav, banner, and row, on this page. */}
        
        <Nav/> 

        <Banner/>

        <Row title = "Netflix Original" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>
        <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/> 
        <Row title = "Trending Now" fetchUrl = {requests.fetchTrending}/>
        <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
        <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
        <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
        <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
        <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>


    </div>
  )
}

export default HomeScreen;