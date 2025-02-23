import React from 'react'
import '../styles/hero.css'
import data from '../data.json'

const Hero = () => {
    
    return (
        <div className='hero' id='hero'>
            <img className='hero_img' src="/hero/hero1.jpg" alt="" />
            <div className="hero_content">
                <h1 style={{color: 'white'}}>Welcome to,</h1>
                <h1 className='hero_content-title'>{data.name}</h1>
                <div className="tagline">{data.tagline}</div>
                <div className='hero_content-links'>
                    <span>Join today</span>
                    <span>Know more</span>
                </div>
            </div>
        </div>
    )
}

export default Hero