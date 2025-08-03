import React, { useState } from 'react'




const AuthForm = () => {
    const[isLogin,setIsLogin]=useState(true);
  return (
    <div className='container'>
      <div className="form-container">
        <div className="form-toggle">
            <button className={ isLogin  ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
            <button className={!isLogin ? 'active':""} onClick={() => setIsLogin(false)}>SignUp</button>
        </div>
        {isLogin ? <>
        <div className="form">
            <>
            <h2>Login Form </h2>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Enter your password' />
            <a href="#">forgot password ?</a>
            <button>Login</button>
            <p>Not member yet ? <a href="#" onClick={() => setIsLogin(false)}>SignUp Now</a></p>
            </>
        </div>
        </>:
        <>
        <div className='form'>
            <h2>SignUp Form</h2>
            <input type="email" placeholder='Email Address' />
            <input type="Password" placeholder='Password' />
            <input type="Password" placeholder='Confirm Password' />
            <button>SignUp</button>
        </div>

        </>}
      </div>

    </div>
  )
}

export default AuthForm
