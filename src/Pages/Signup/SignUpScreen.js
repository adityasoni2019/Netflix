import React from 'react'
import "./SignUpScreen.css"


const SignUpScreen = () => {

  const register = (e) => {
    e.preventDefault();
    // this is to basically present the default functionality.
    // yeah, so, anytime a button is inside a form, it gets refreshed, and we don't want that to happen. Hence, this.
  }

  const signIn = (e) => {
      e.preventDefault(); 

  }

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input placeholder='Email' type="email" />
        <input placeholder='Password' type="password" />
        <button type="submit" onClick={signIn}>Sign Up</button>
        <h4>
          <span className='signupScreen__gray'>New to Netflix? </span>
          <span className='signupScreen__link' onClick={register}>Sign Up Now</span>
        </h4>
      </form>
    </div>
  )
}

export default SignUpScreen;
