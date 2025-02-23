import React from "react";
import { Header } from "../components";
import "../styles/contact.css";
import data from "../data.json";

const Contact = () => {
  // need to fix location query url
  return (
    <div id="contact">
      <Header title="Contact us" />
      <div className="contact-content">
        <div className="form">
          <h2>Email to us</h2>
          <input type="text" name="name" id="name" placeholder="Name" />
          <input
            type="number"
            name="contactno"
            id="contactno"
            placeholder="Contact Number"
          />
          <input type="email" name="email" id="email" placeholder="Email" />
          <textarea
            rows={6}
            type="message"
            name="message"
            id="message"
            placeholder="Message"
          />
          <button>Send</button>
        </div>
        <div className="contact-other">
          <div className="newsletter">
            <h2>Subscribe to newsletter</h2>
            <div className="subscribe-ip">
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="Enter your Email"
              />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="contact-info">
            <h2>Address</h2>
            <p>{data.contacts.address1}</p>
            <p>{data.contacts.address2}</p>
            <p>{data.contacts.address3}</p>
            <p>
              <b>Landmark: </b>
              {data.contacts.landmark}
            </p>
            <p>
              <b>Phone: </b>+91 {data.contacts.whatsapp}
            </p>
            <a
              href={`https://www.google.com/maps/place/${data.contacts.location}`}
              target="_blank"
            >
              <img src="map.svg" alt="" className="map-logo" />
              View on google map
            </a>
            {data.contacts.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
