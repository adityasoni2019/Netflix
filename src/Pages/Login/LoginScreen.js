import React, { useState } from 'react'
import '../Login/LoginScreen.css'
import SignInScreen from '../SignInScreen';

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
              signIn ? (<SignInScreen />) : (
                <div className='loginBody_text'>

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
                </div>
              )}


          </div>
        </>
      </div>
    </div>
  )
}

export default LoginScreen
