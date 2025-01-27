import React from 'react'
import '../styles/services.css'
import { Header } from '../components'


const Services = () => {
    return (
        <div className="services" id="services">
            <Header title="SERVICES" />
            <ul className='services_container'>
                {Array(4).fill().map((n, i) => (
                    <li key={i} className="services_item">
                        <img src="" alt="image" className="card services_item-img" />
                        <div className="card services_item-content">
                            <h1>Service#{i + 1}</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ducimus possimus? Exercitationem, dolor similique ducimus voluptates adipisci perferendis nisi suscipit minima, voluptate consectetur eos iste maxime pariatur totam, nihil ullam!</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Services