import React from 'react'
import '../styles/about.css'

const About = () => {
    return (
        <div className="about">
            <ul>
                {Array(3).fill().map((i) => (
                    <li>
                        <img src="" alt="" />
                        <div>Content</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default About