import React from 'react'
import '../styles/services.css'
import { Header } from '../components'
import data from '../data.json'


const Services = () => {
    return (
        <div className="services" id="services">
            <Header title="SERVICES" />
            <ul className='services_container'>
                {data.services.map((service, i) => (
                    <li key={i} className="services_item">
                        <img src={service.photo} alt="image" className="card services_item-img" />
                        <div className="card services_item-content">
                            <h1>{service.title}</h1>
                            <p>{service.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Services