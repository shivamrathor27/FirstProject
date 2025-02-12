import React from 'react'
import { Header } from '../components'
import '../styles/contact.css'

const Contact = () => {
    // need to fix location query url
    const location = "WQHC+QW9"
    return (
        <div id='contact'>
            <Header title='Reach out to us' />
            <div className="contact-content">
                <div className="form">
                    <h2>Email to us</h2>
                    <input type="text" name="name" id="name" placeholder='Name'/>
                    <input type="email" name="email" id="email" placeholder='Email'/>
                    <textarea rows={6} type="message" name="message" id="message" placeholder='Message' />
                    <button>Send</button>
                </div>
                <div className="contact-info">
                    <h3>Address</h3>
                    <p>130A Nehru Nagar III</p>
                    <p>Ghaziabad, UP, 201001</p>
                    <h4>Landmark</h4>
                    <p>Near Nasirpur Fatak</p>
                    <h3>Phone No.</h3>
                    <p>+91 9453456744</p>
                    <p>+91 9453456744</p>
                    <a href={`https://www.google.com/maps/place/${location}`} target='_blank'>Open google map</a>
                </div>
            </div>
        </div>
    )
}

export default Contact