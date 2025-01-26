import React from 'react'
import '../styles/nav.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="/logo.jpg" alt="Logo" className="nav-logo" />
      <nav>
        <button><a href="#hero">Home</a></button>
        <button><a href='#services'>Services</a></button>
        <button><a href='#gallery'>Gallery</a></button>
        <button>Membership</button>
      </nav>
      <button className='nav-contact'>Get in touch</button>
    </div>
  )
}

export default Navbar