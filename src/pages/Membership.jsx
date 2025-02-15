import React, { useRef, useState } from 'react'
import { Header } from '../components'
import '../styles/membership.css'
import data from '../data.json'

// sample data
const memberships = {
    durations: ['Month', 'Quarter', 'Half year', 'Year'],
    plans: [
        {
            name: 'Plan Detail',
            price: data.membership.map((plan)=>plan.price),
            features: [
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
                {data.membership.map((plan, i) => (
                    <button key={i} className='duration-btn' onClick={() => handleDuration(i)}>{plan.title}</button>
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
                        <h5 className='plan-terms'> <sup>*</sup>No refund</h5>
                        <h5 className='plan-terms'><sup>*</sup>No adjustment</h5>
                        <a
                            href = {`https://wa.me/${data.contacts.whatsapp}?text=${data.contacts.wpmsg}`}
                                // href="https://wa.me/9315352423?text=Hello, I need to join the gym!"
                                target="_blank"><button className="plan-contact">Enquire now</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Membership