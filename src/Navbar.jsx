import React from 'react'
import {Signin} from './Signin';
import {NavLink} from 'react-router-dom';
import {Login} from "./Login";

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Somo<span>Cap!</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink  className="nav-link active mr-4"  to = "/Home" >HOME</NavLink>
        </li>
        <li class="nav-item">
         <NavLink  className="nav-link active mr-4"  to = "/About" >ABOUT</NavLink>
         </li>
        <li class="nav-item">
         <NavLink  className="nav-link active mr-4"  to = "/Contact" >CONATCT</NavLink>
        </li>
        <li class="nav-item">
         <NavLink  className="nav-link active mr-4"  to = "/Service" >SERVICE</NavLink>
        </li>

      </ul>
      <form class="d-flex" role="search">
        
        <button class="btn btn-outline-success me-5" type="submit"><NavLink to = "/Signin">Sign Up</NavLink></button>
        <button class="btn btn-outline-success" type="submit"><NavLink to = "/Login">Login</NavLink></button>
        <button><NavLink to = "/Login">Login</NavLink></button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar