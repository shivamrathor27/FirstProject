import React from 'react'

const Popup = ({setShow}) => {
    const closePopup = ()=>{
        setShow(false)
    }
  return (
    <div className='popup'>
        <img className='popupImg' src='images/logo.png' />
        <button onClick={closePopup}>X</button>
    </div>
  )
}

export default Popup