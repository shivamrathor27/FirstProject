import React, { useRef, useState } from 'react'
import { Header } from '../components'
import '../styles/membership.css'

// sample data
const memberships = {
    durations: ['Month', 'Quarter', 'Year'],
    plans: [
        {
            name: 'Basic',
            price: [2000, 5000, 20000],
            features: [
                'Lorem ipsum dolor.',
                'Lorem ipsum dolor.',
                'Lorem ipsum dolor.',
            ]
        },
        {
            name: 'Silver',
            price: [3500, 9000, 35000],
            features: [
                'Lorem ipsum dolor.',
                'Lorem ipsum dolor.',
                'Lorem ipsum dolor.',
                'Lorem ipsum dolor.',
                'Lorem ipsum dolor.',
            ]
        },
        {
            name: 'Gold',
            price: [4500, 12000, 50000],
            features: [
                'Lorem ipsum dolor.',
                'Lorem ipsum dolor.',
                'Lorem ipsum dolor.',
                'Lorem ipsum dolor.',
                'Lorem ipsum dolor.',
                'Lorem ipsum dolor.',
            ]
        },
    ]
}

const Membership = () => {
    const active = useRef(null)
    const [activeDuration, setActiveDuration] = useState(0);

    

    function handleDuration(i) {
        active.current.style.left = `${active.current.offsetWidth * i}px`;
        setActiveDuration(i)
    }

    return (
        <div id='membership'>
            <Header title='Membership' />
            <div className="duration-btn-container">
                {memberships.durations.map((duration, i) => (
                    <button key={i} className='duration-btn' onClick={() => handleDuration(i)}>{duration}</button>
                ))}
                <div className='duration-btn active' ref={active}></div>
            </div>
            <div className='membership'>
                {memberships.plans.map((plan, i) => (
                    <div key={i} className="plans">
                        <h2>{plan.name}</h2>
                        <h1>₹{plan.price[activeDuration]}</h1>
                        <p>Per {memberships.durations[activeDuration]}</p>
                        <ul>
                            {plan.features.map((feature, i) => (
                                <li key={i} className="feature">{feature}</li>
                            ))}
                        </ul>
                        <button className="plan-contact">Enquire now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Membership