import React, { useEffect, useRef, useState } from "react";
import "../styles/nav.css";
import data from "../data.json";

const Navbar = () => {
  const [theme, setTheme] = useState("false");
  const menuBtn = useRef(null);
  const rootElement = document.getElementById("root");
  const navElement = document.getElementsByTagName('nav');
  if (theme) {
    rootElement.classList.add("dark");
  } else {
    rootElement.classList.remove("dark");
  }

  const handleMenuBtn = () => {
    console.log(navElement);
    
    navElement[0].classList.toggle('hide');
  }

  return (
    <div className="navbar">
      <img src="/logo.jpg" alt="Logo" className="nav-logo" />
      <nav className="hide" onClick={handleMenuBtn}>
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
      <div className="nav-options">
        <a
          href={`https://wa.me/${data.contacts.whatsapp}?text=${data.contacts.wpmsg}`}
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
          src="theme.svg"
          alt=""
          srcset=""
          />
        <img className="menu" src="menu.svg" alt="" onClick={handleMenuBtn} ref={menuBtn}/>
      </div>
    </div>
  );
};

export default Navbar;

/* <button className='nav-contact'>Get in touch</button> */