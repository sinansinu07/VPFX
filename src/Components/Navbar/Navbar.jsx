import React, { useEffect, useState } from 'react'
import "./Navbar.css"

import logobg from "../../Assets/Common/logovpfx.webp"
import logo from "../../Assets/Common/logovpfx.png"

import menuIcon from "../../Assets/Common/menu-icon.svg"
import menuIcon2 from "../../Assets/Common/menu-icon1.svg"
// import facebook from "../../../Assets/Social-Links/facebook.svg"
// import instagram from "../../../Assets/Social-Links/instagram.svg"
// import youtube from "../../../Assets/Social-Links/youtube.svg"
// import twitter from "../../../Assets/Social-Links/twitter.svg"
// import linkedin from "../../../Assets/Social-Links/linkedin.svg"
// import mail_icon from "../../../Assets/Common/mail.svg"
import phone_icon from "../../Assets/Common/phone.svg"
import whatsapp_icon from "../../Assets/Social-Links/whatsapp1.svg"
// import { IoMdArrowDropdown } from "react-icons/io";

import { useLocation } from 'react-router-dom'

export default function Navbar({ handleSectionChange, activeSection }){
  const location = useLocation()
  const [mobileMenu, setMobileMenu] = useState(false)
  const [sticky, setSticky] = useState(false)
  // const [activeSection, setActiveSection] = useState('2d&3d-animation');

  const toggle = () => {
    setMobileMenu(!mobileMenu)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false)
    })
  }, [])

  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsDropdownOpen(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsDropdownOpen(false);
  // };
  return (
    <div className="navbar">
      <nav className={`container ${sticky? "dark-nav":""}`}>
      <a href="/"><img src={sticky ? logo : logobg} alt="" className={`${sticky ? "logo" : "logobg"}`}></img></a>
      <ul className={mobileMenu ? "navbar-ul" : "hide-mobile-menu"}>
        <li><a href="#whyus" className={`${location.hash === "#whyus" ? "active" : ""}`}>WHY US</a></li>
        {/* <li><a href="#services" className={`${location.hash === "#services#" ? "active" : ""}`}>ACCOUNTS </a></li> */}
        <li><a href="#tradenow" className={`${location.hash === "#tradenow" ? "active" : ""}`}>MARKET TO TRADE</a></li>
        <li><a href="#mampamm" className={`${location.hash === "#mampamm" ? "active" : ""}`}>PLATFORM</a></li>
        <li><a href="#testimonials" className={`${location.hash === "#testimonials" ? "active" : ""}`}>TESTIMONIALS</a></li>
        <li><a href="#team" className={`${location.hash === "#team" ? "active" : ""}`}>OUR TEAM</a></li>
        <li><a href="#contact-us" className={`${location.hash === "#contact-us" ? "active" : ""}`}>CONTACT US</a></li>
      </ul>
      <img src={phone_icon} alt="" className="phoneIcon"/>
      <img src={whatsapp_icon} alt="" className="whatsappIcon"/>
      <button className={`btn1 ${sticky? "btn2" :""}`}><a href="#about-contact">LOGIN</a></button>
      <img src={sticky || mobileMenu ? menuIcon2 : menuIcon} alt="" className="menuIcon" onClick={() => toggle()}/>
    </nav>
    </div>
  )
}