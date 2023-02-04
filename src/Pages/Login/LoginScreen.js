import React, { useState } from 'react'
import '../Login/LoginScreen.css'
import SignUpScreen from "../Signup/SignUpScreen"

const LoginScreen = () => {

  const [signIn, setSignIn] = useState(false);

  return (

    <div className='loginScreen'>
      <div className='loginScreen__background'>
        <img
          className='loginScreen__logo'
          // src = "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" 
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"

          alt="login background"
        />

        <button
          onClick={() => setSignIn(true)}
          className='loginScreen__button'>Sign in</button>

        <div className='loginScreen__gradient' />
        <>
          <div className='loginScreen__body'>

            {
              signIn ? (<SignUpScreen />) : (
                <div className='loginBody_text'>

                  <h1>Unlimited movies, TV shows and more.</h1>
                  <h2>Watch anywhere. Cancel anytime.</h2>
                  <h3>Ready to watch? Enter your email to create or restart your membership.</h3>


                  <div className='loginScreen__input'>
                    <form className='loginForm'>
                      <input
                        type="email"
                        placeholder='Email'
                      />

                      <button
                        onClick={() => setSignIn(true)}
                        className='loginScreen__getStarted'>Get Started</button>
                    </form>
                  </div>
                </div>
              )}


          </div>
        </>
      </div>
    </div>
  )
}

export default LoginScreen



/*
  // LoginScreen.js

  These are the chanes before the merge. 
  I had reverted all the changes in the file before the merge, and this is that code. 

  import React, { useState } from 'react'
  import '../Login/LoginScreen.css'
  import SignUpScreen from '../Signup/SignUpScreen'
  
  const LoginScreen = () => {
  
    const [signIn, setSignIn] = useState(false);
  
    return (
    
      <div className='loginScreen'>
        <div className='loginScreen__background'>
          <img
            className='loginScreen__logo'
            // src = "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" 
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
    
            alt="login background"
          />
    
          <button
            onClick={() => setSignIn(true)}
            className='loginScreen__button'>Sign in</button>
    
          <div className='loginScreen__gradient' />
          <>
            <div className='loginScreen__body'>
    
              {
                signIn ? (<SignUpScreen />) : (
                  <>
                
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                
                
                    <div className='loginScreen__input'>
                      <form>
                        <input
                          type="email"
                          placeholder='Email'
                        />
                
                        <button
                          onClick={() => setSignIn(true)}
                          className='loginScreen__getStarted'>get started</button>
                      </form>
                    </div>
                  </>
                )}
                
                
            </div>
          </>
        </div>
      </div>
    )
  }
  
  export default LoginScreen



*/