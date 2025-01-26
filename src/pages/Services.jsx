import React from 'react'
import '../styles/services.css'
import {Header} from '../components'


const Services = () => {
    return (
        <div className="services" id="services">
            <Header title="SERVICES" />
            <ul className='services_container'>
                {Array(4).fill().map((n, i) => (
                    <li className="services_item">
                        <img src="" alt="image" className="card services_item-img" />
                        <div className="card services_item-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam ex corrupti nisi at, tenetur aut neque cupiditate eos soluta labore, inventore asperiores. Rerum fugit omnis eveniet eius maxime accusamus!
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Services