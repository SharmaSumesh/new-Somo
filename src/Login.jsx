import React from 'react'
import "./Style/Login.css";

const Login = () => {
  return (
    <>
        <h6>Login In</h6>
        <label for="password">Enter Your Email</label>
        <div className = "email">
        <input type="text" placeholder="Enter The Email Address"/><br/>
        </div>
        <div className = "password">
            <label for="password">Enter Your Password</label>
            <input type = "password" placeholder="Enter The Password"/>
        </div>
    </>
  )
}

export default Login