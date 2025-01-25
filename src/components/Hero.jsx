import React from 'react'
import '../styles/hero.css'

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <img className='hero_img' src="/hero/hero1.jpg" alt="" />
            <div className="hero_content">
                <h1>Welcome to,</h1>
                <h1 className='hero_content-title'>The Gym</h1>
                <div className='hero_content-links'>
                    <span>Join today</span>
                    <span>Know more</span>
                </div>
            </div>
        </div>
    )
}

export default Hero