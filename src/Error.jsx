import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
   
        <img src = "./Images/error.svg"  className = "img1" alt = "erorr Images"/>
        <div className = "img1">
        <button className="btn1"><NavLink to = "/Home">Go back</NavLink></button>
        </div>
    
   
    </>
  )
}

export default Error