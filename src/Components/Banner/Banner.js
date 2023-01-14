// The banner is basically the movie banner. Something like trending or something 
import React from 'react'
import '../Banner/Banner.css'


// the function below is to truncate our text when the .banner__description is too long 

const Banner = () => {

  function truncate(string, n){
    return string?.length > n? string.substr(0,n-1) + '...': string; 
  }
  
  return (
    <header className='banner'
      style = {{
        backgroundSize: "cover", 
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>Movie Name</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My list</button>
        </div>

        <h1 className='banner__description'>
        {truncate(`This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. This is a test description.`, 150)}
        </h1>
      </div>

      <div className='banner__fadeButtom'>
        {/* This is basically for giving the banner a fade effect */}

      </div>         

    </header>
  )
}

export default Banner
