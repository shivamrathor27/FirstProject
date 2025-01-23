import React from 'react'

const Popup = ({setShow}) => {
    const closePopup = ()=>{
        setShow(false)
    }
  return (
    <div className='popup'>
        <img className='popupImg' src='https://www.dpsgs.org/ghaziabad/images/toppers/pratyusha.jpg' />
        <button onClick={closePopup}>X</button>
    </div>
  )
}

export default Popup