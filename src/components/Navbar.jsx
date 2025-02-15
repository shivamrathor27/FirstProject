import React, { useEffect, useState } from "react";
import "../styles/nav.css";
import data from '../data.json'

const Navbar = () => {
  const [theme, setTheme] = useState("false");
  const rootElement = document.getElementById("root");
  if (theme) {
    rootElement.classList.add("dark");
  } else {
    rootElement.classList.remove("dark");
  }

  return (
    <div className="navbar">
      <img src="/logo.jpg" alt="Logo" className="nav-logo" />
      <nav>
        <button>
          <a href="#hero">Home</a>
        </button>
        <button>
          <a href="#services">Services</a>
        </button>
        <button>
          <a href="#gallery">Gallery</a>
        </button>
        <button>
          <a href="#membership">Membership</a>
        </button>
        <button>
          <a href="#contact">Contact</a>
        </button>
      </nav>
      {/* <button className='nav-contact'>Get in touch</button> */}
      <a
      href = {`https://wa.me/${data.contacts.whatsapp}?text=${data.contacts.wpmsg}`}
        // href="https://wa.me/9315352423?text=Hello, I need to join the gym!"
        target="_blank"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          width="40"
          height="30"
          alt="WhatsApp"
        />
      </a>
      <img
        onClick={() => setTheme(!theme)}
        className="theme-icon"
        src={theme ? "theme.svg" : "theme-white.svg"}
        alt=""
        srcset=""
      />
    </div>
  );
};

export default Navbar;
