// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import './Testimonials.css'
import whiteright  from '../../assets/whiteright.png'
import whiteleft from '../../assets/whiteleft.png'
import graduate3 from '../../assets/graduate3.jpg'
import testimony2 from '../../assets/testimony2.avif'
import testimony1 from '../../assets/testimony1.png'
import testimony5 from '../../assets/testimony5.jpg'
const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}
const slideBackward = () => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}
  return (
    <div className='testimonials'>
      <img src={whiteright} alt="" className='next-btn' onClick={slideForward} />
      <img src={whiteleft} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={graduate3} alt=""/>
                        <div>
                            <h3>Michael Jack</h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p>I chose EduCity University because of its strong reputation for academic excellence and innovative research opportunities. But what I`ve found here is so much more than that. The community is vibrant and diverse, with students and faculty from all over the world. I`ve been able to connect with people from different backgrounds and industries, and learn from their experiences and perspectives. The university`s focus on experiential learning and hands-on experience has also been invaluable.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={testimony2} alt=""/>
                        <div>
                            <h3>Sarah Lehman</h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p>I`ve had an incredible experience at EduCity University. The faculty and staff are dedicated to helping students succeed, and the resources available to us are top-notch. I`ve been able to take advantage of internship opportunities, networking events, and research projects that have helped me build a strong foundation in my field. I`m confident that the skills and knowledge I`ve gained at EduCity will serve me well in my future career. I`m proud to be an EduCity student 
                    .</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={testimony1} alt=""/>
                        <div>
                            <h3>Adam Lee</h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p>EduCity University has been a game-changer for me. The campus is beautiful, the people are friendly, and the academic programs are rigorous and engaging. I`ve been able to explore my passions and interests through a variety of courses and extracurricular activities, and I`ve had the opportunity to work with talented and motivated students from all over the world. The support services at EduCity are also excellent - from academic advising to mental health resources.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={testimony5} alt=""/>
                        <div>
                            <h3>Lauren Patel</h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p>I was a bit nervous about attending university, but from the moment I stepped onto the EduCity campus, I knew I was in the right place. The atmosphere is welcoming and inclusive, and the faculty are truly invested in our success. I`ve been able to take advantage of research opportunities, study abroad programs, and leadership development initiatives that have helped me grow both personally and professionally. EduCity has given me the tools and confidence I need to pursue my dreams.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
