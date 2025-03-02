// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import arrowrolls from '../../assets/icons8-arrow-right-50.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure Better Education For a Better World</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experience needed to excel in the dynamic field of education</p>
        <button className='btn'>Explore More <img src={arrowrolls} alt="" /></button>
      </div> 
    </div>
  )
}

export default Hero
