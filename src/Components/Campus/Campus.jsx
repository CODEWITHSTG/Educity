// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Campus.css'
import gallery01 from '../../assets/gallery01.jpeg'
import gallery1 from '../../assets/gallery1.jpg'
import gallery3 from '../../assets/gallery3.jpg'
import gallery5 from '../../assets/gallery5.jpg'
import whiteright from '../../assets/whiteright.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery01} alt="" />
        <img src={gallery1} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery5} alt="" />
      </div>
      <button className='btn dark-btn'>See more here<img src={whiteright} alt="" /></button>
    </div>
  )
}

export default Campus
