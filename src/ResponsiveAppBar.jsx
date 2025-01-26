import React from 'react'

const ResponsiveAppBar = () => {
  return (
    <div className='nav-bar'>
        <img src="images/logo.png" alt="Logo" className="logo" />
        <button><a href="#home">Home</a></button>
        <button>About</button>
        <button>Pricing</button>
        <button><a href='#gallery'>Gallery</a></button>
        <button><a href='#contact'>Contact</a></button>
    </div>
  )
}

export default ResponsiveAppBar