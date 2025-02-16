import React from 'react'
import { Header } from '../components'
import '../styles/contact.css'
import data from '../data.json'

const Contact = () => {
    // need to fix location query url
    return (
        <div id='contact'>
            <Header title='Reach out to us' />
            <div className="contact-content">
                <div className="form">
                    <h2>Email to us</h2>
                    <input type="text" name="name" id="name" placeholder='Name'/>
                    <input type="number" name="contactno" id="contactno" placeholder='Contact Number'/>
                    <input type="email" name="email" id="email" placeholder='Email'/>
                    <textarea rows={6} type="message" name="message" id="message" placeholder='Message' />
                    <button>Send</button>
                </div>
                <div className="contact-info">
                    <h3>Address</h3>
                    <p>{data.contacts.address1}</p>
                    <p>{data.contacts.address2}</p>
                    <p>{data.contacts.address3}</p>
                    <h4>Landmark</h4>
                    <p>{data.contacts.landmark}</p>
                    <h3>Phone No.</h3>
                    <p>+91 {data.contacts.whatsapp}</p>
                    <a href={`https://www.google.com/maps/place/${data.contacts.location}`} target='_blank'>Open google map</a>
                    {data.contacts.address}
                </div>
            </div>
        </div>
    )
}

export default Contact