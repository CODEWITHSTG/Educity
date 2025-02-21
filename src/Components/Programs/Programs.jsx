// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Programs.css'
import program1 from '../../assets/program1.jpg'
import program2 from '../../assets/program2.jpg'
import program3 from '../../assets/program3.jpg'
import graduate5 from '../../assets/graduate5.jpg'
import graduate3 from '../../assets/graduate3.jpg'
import graduate2 from '../../assets/graduate2.jpg'
const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={program1} alt="" />
        <div className="caption">
            <img src={graduate5} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program2} alt="" />
        <div className="caption">
            <img src={graduate3} alt="" />
            <p>Masters Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program3} alt="" />
        <div className="caption">
            <img src={graduate2} alt="" />
            <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
