import React, {useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import '../App.css';



const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (

    
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#cea548] text-black'>
       
       {/*logo*/}
      <img src={logo} alt='logo' height={65} width={65} /> 
      
      {/* menu */}

          <ul className='hidden md:flex'>
            <li className='mx-4'>
              <Link  to='/' smooth={true} duration={500}>
                Home
              </Link>
              </li>
            <li className='mx-4'>
            <Link  to='/about' smooth={true} duration={500}>
                About
              </Link>
              </li>
            <li>
            <Link to='/media' smooth={true} duration={500}>
                Media
              </Link>
            </li>
            <li className='mx-4'>
            <Link to='/services' smooth={true} duration={500}>
                Services
              </Link>
              </li>
            <li className='mx-4'>
            <Link  to='/contact' smooth={true} duration={500}>
                Contact
              </Link>
              </li>
          </ul>
      

      {/* humburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars size={30}/> : <FaTimes size={30} />}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#cea548] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/' smooth={true} duration={500}>
                Home
              </Link>
            </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/about' smooth={true} duration={500}>
                About
              </Link>
            </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/media' smooth={true} duration={500}>
                Media
              </Link>
            </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/services' smooth={true} duration={500}>
                Services
              </Link>
            </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/contact' smooth={true} duration={500}>
                Contact
              </Link>
            </li>
      </ul>

    </div>

    
  )
}

export default Navbar