import React from 'react'
import '../styles/header.css'

const Header = ({title}) => {
    return (
        <div className="header">
            <div className="header-line"></div>
            <p className='header-title'>{title}</p>
            <div className="header-line"></div>
        </div>
    )
}

export default Header