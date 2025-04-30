import React from 'react'
import logo from "../../Assets/Common/logovpfx.png"
import facebook from "../../Assets/Social-Links/facebook.svg"
import instagram from "../../Assets/Social-Links/instagram.svg"
import youtube from "../../Assets/Social-Links/youtube.svg"
import twitter from "../../Assets/Social-Links/twitter.svg"
import linkedin from "../../Assets/Social-Links/linkedin.svg"
import mail_icon from "../../Assets/Common/mail1.svg"
import phone_icon from "../../Assets/Common/phone1.svg"
// import SkyLineDubai from "../../Assets/Common/SkylineDubai.jpg"

import "./Footer.css"
import { useLocation } from 'react-router-dom'

export default function Footer() {
  const location = useLocation()
  return (
    <footer>
        <div className="row">
          <div className="col">
            <img src={logo} alt="" className="logo"/>
            <p>
            We’re all about crafting trading experiences that stand out and make an impact for the clients we serve.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61565494103415/" alt=""><img className='social' src={facebook} alt=""/></a>
              <a href="https://www.instagram.com/rabbit_nd_carrot/" alt=""><img className='social' src={instagram} alt=""/></a>
              <a href="https://www.youtube.com/@RabbitandCarrot-z5l/" alt=""><img className='social' src={youtube} alt=""/></a>
              <a href="https://x.com/rabbitndcarrot/" alt=""><img className='social' src={twitter} alt=""/></a>
              <a href="https://www.linkedin.com/company/rabbitandcarrot/" alt=""><img className='social' src={linkedin} alt=""/></a>
            </div>
          </div>

          <div className="col">
            <h3>Office <div className="underline"><span></span></div></h3>
            <p></p>
            <p>Office 3101, <br/>Latifa Tower, World Trade Center First <br/> Dubai, United Arab Emirates</p>
            <p></p>
            <ul>
              <a href="/"><li><img className="mail-icon" src={mail_icon} alt=""/>info@vpfx.com<br/></li></a>
              <a href="/"><li><img className="phone-icon" src={phone_icon} alt=""/>+971 585596689</li></a>
            </ul>
            {/* <p className="email-id">info@rabbitandcarrot.com</p>
            <h4>+971 542226464</h4> */}
          </div>
          <div className="col">
            <h3>Quick Links <div className="underline"><span></span></div></h3>
            <ul>
              <li><a href="#whyus" alt="" className={`${location.pathname === "#whyus" ? "active" : ""}`}>Why Us</a></li>
              <li><a href="#tradenow" className={`${location.pathname === "#tradenow" ? "active" : ""}`}>Market To Trade</a></li>
              <li><a href="#mampamm" className={`${location.pathname === "#mampamm" ? "active" : ""}`}>Platform</a></li>
              <li><a href="#testimonials" className={`${location.pathname === "#testimonials" ? "active" : ""}`}>Testimonials</a></li>
              <li><a href="#team" className={`${location.pathname === "#team" ? "active" : ""}`}>Our Team</a></li>
              <li><a href="#contact-us" className={`${location.pathname === "#contact-us" ? "active" : ""}`}>Contact Us</a></li>
            </ul>
          </div>
          <div className="col">
            <h3>Services<div className="underline"><span></span></div></h3>
            <ul>
              <li><a href="/" alt="" className={`${location.pathname === "/services/2d-animatons" ? "active" : ""}`}>MT5 - MetaTrader</a></li>
              <li><a href="/" alt="" className={`${location.pathname === "/services/3d-animatons" ? "active" : ""}`}>MetaTrader - Google Play</a></li>
              <li><a href="/" alt="" className={`${location.pathname === "/services/video-producton" ? "active" : ""}`}>MetaTrader - App Store</a></li>
              <li><a href="/" alt="" className={`${location.pathname === "/services/digital-marketing" ? "active" : ""}`}>Trading Signal</a></li>
              <li><a href="/" alt=""className={`${location.pathname === "/services/it" ? "active" : ""}`} >VPFX - MAM / PAMM</a></li>
              {/* <li><a href="/" alt=""className={`${location.pathname === "/services/brand" ? "active" : ""}`} >Brand Development</a></li> */}
            </ul>
          </div>
          <div className="col">
            <h3>Start Trading<div className="underline"><span></span></div></h3>
            <ul>
              <li><a href="/" alt="">Open Live Account</a></li>
              <li><a href="/" alt="">Open Demo Account</a></li>
              <li><a href="/" alt="">Deposit Funds</a></li>
              <li><a href="/" alt="">Funds Withdrawal</a></li>
            </ul>
          </div>
        </div>
        <p className="copyRight">VPFX © 2009 - 2024. All Rights Reserved.</p>
    </footer>
  )
}
