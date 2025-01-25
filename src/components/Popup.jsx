import React from 'react'
import '../styles/popup.css'

const Popup = ({ setShow }) => {



  return (
    <div className='popup'>
      <img className='popupImg' src='images/logo.png' />
      <button onClick={() => setShow(false)}>X</button>
    </div>
  )
}

export default Popup