import React from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom"
import './App.css';

const HeroSection = () => {
  return (
    <>
    <div className="container grid grid-two-column">
        <div className="section-hero-data">
            <p className = "p1">THIS IS ME</p>
            <h1 className = "hero-heading">SOMO CAP</h1>
            <p className = "hero-para">Hi, i am Sumesh Kumar Sharma from rohtak currently complete my internship at Newton School and currently working as jobs terriority as full Stack Developer </p>
            
            <button type="button" class="btn btn-primary"><NavLink className = "btn" to = "/contact">Hire Me</NavLink></button>
        </div>
        <div className="section-hero-image">
            <picture>
                <img src = "./Images/hero.svg" alt = "img"/>
            </picture>
        </div>
    </div>
    </>
  )
};


export default HeroSection