// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/1stg.jpg'
import menuicon from '../../assets/menuicon.jpg'
import { Link, Element } from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  }
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-310} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-290} duration={490}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-300} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}className='btn'>Contact Us</Link></li>
      </ul>
      <img src={menuicon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
