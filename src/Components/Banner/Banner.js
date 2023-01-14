// The banner is basically the movie banner. Something like trending or something 
import React, { useEffect, useState } from 'react'
import axios from '../../files/Axios';
import requests from '../../files/Requests';
import '../Banner/Banner.css'


// the function below is to truncate our text when the .banner__description is too long 

const Banner = () => {

  // fetchignt the movie from TBDB
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals); 
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length-1)
        ]
      );
      return request; 
    }
    fetchData(); 
  }, []);

  console.log(movie);

  function truncate(string, n){
    return string?.length > n? string.substr(0,n-1) + '...': string; 
  }
  
  return (
    <header className='banner'
      style = {{
        backgroundSize: "cover", 
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>{movie?.title || movie?.name  || movie?.original_name}</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My list</button>
        </div>

        <h1 className='banner__description'>
        {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className='banner__fadeButtom'>
        {/* This is basically for giving the banner a fade effect */}

      </div>         

    </header>
  )
}

export default Banner
