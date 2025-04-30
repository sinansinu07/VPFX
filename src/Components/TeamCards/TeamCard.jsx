import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import "./TeamCard.css"
// import 'bootstrap/dist/css/bootstrap.min.css';


import user from "../../Assets/Common/dummy.jpg"
// import user2 from "../../Assets/TradeCard/user-fill.svg"
// import user3 from "../../Assets/TradeCard/user-fill.svg"
import facebook from "../../Assets/Social-Links/facebook-white.svg"
import instagram from "../../Assets/Social-Links/instagram-white.svg"
import youtube from "../../Assets/Social-Links/youtube-white.svg"
import twitter from "../../Assets/Social-Links/twitter-white.svg"
import linkedin from "../../Assets/Social-Links/linkedin-white.svg"

export default function TradeCard() {
    return (
        <div id="team" className="team container1">
            <h1 className="commonHeading"><span className="bg">Our </span><span className="color"> Team</span></h1>
            <div className="card-wrapper">
      <Card className="card">
        <div className="card-image">
          <CardImg
            top
            src={user}
            alt="profile-card"
            className="profile-img"
          />
        </div>
        <ul className="social-icons">
            <li><a href="https://www.facebook.com/profile.php?id=61565494103415/" alt=""><img className='social' src={facebook} alt=""/></a></li>
            <li><a href="https://www.instagram.com/rabbit_nd_carrot/" alt=""><img className='social' src={instagram} alt=""/></a></li>
            <li><a href="https://www.youtube.com/@RabbitandCarrot-z5l/" alt=""><img className='social' src={youtube} alt=""/></a></li>
            <li><a href="https://x.com/rabbitndcarrot/" alt=""><img className='social' src={twitter} alt=""/></a></li>
            <li><a href="https://www.linkedin.com/company/rabbitandcarrot/" alt=""><img className='social' src={linkedin} alt=""/></a></li>
        </ul>
        <CardBody className="details">
          <CardTitle tag="h2">
            Sayed Aamir
            <br />
            <span className="job-title">Web Developer</span>
          </CardTitle>
        </CardBody>
      </Card>
      <Card className="card">
        <div className="card-image">
          <CardImg
            top
            src={user}
            alt="profile-card"
            className="profile-img"
          />
        </div>
        <ul className="social-icons">
            <li><a href="https://www.facebook.com/profile.php?id=61565494103415/" alt=""><img className='social' src={facebook} alt=""/></a></li>
            <li><a href="https://www.instagram.com/rabbit_nd_carrot/" alt=""><img className='social' src={instagram} alt=""/></a></li>
            <li><a href="https://www.youtube.com/@RabbitandCarrot-z5l/" alt=""><img className='social' src={youtube} alt=""/></a></li>
            <li><a href="https://x.com/rabbitndcarrot/" alt=""><img className='social' src={twitter} alt=""/></a></li>
            <li><a href="https://www.linkedin.com/company/rabbitandcarrot/" alt=""><img className='social' src={linkedin} alt=""/></a></li>
        </ul>
        <CardBody className="details">
          <CardTitle tag="h2">
            Sadik Shaikh
            <br />
            <span className="job-title">Perfomance Marketing Specialist</span>
          </CardTitle>
        </CardBody>
      </Card>
      <Card className="card">
        <div className="card-image">
          <CardImg
            top
            src={user}
            alt="profile-card"
            className="profile-img"
          />
        </div>
        <ul className="social-icons">
            <li><a href="https://www.facebook.com/profile.php?id=61565494103415/" alt=""><img className='social' src={facebook} alt=""/></a></li>
            <li><a href="https://www.instagram.com/rabbit_nd_carrot/" alt=""><img className='social' src={instagram} alt=""/></a></li>
            <li><a href="https://www.youtube.com/@RabbitandCarrot-z5l/" alt=""><img className='social' src={youtube} alt=""/></a></li>
            <li><a href="https://x.com/rabbitndcarrot/" alt=""><img className='social' src={twitter} alt=""/></a></li>
            <li><a href="https://www.linkedin.com/company/rabbitandcarrot/" alt=""><img className='social' src={linkedin} alt=""/></a></li>
        </ul>
        <CardBody className="details">
          <CardTitle tag="h2">
            Mohamed Sinan
            <br />
            <span className="job-title">Web Developer</span>
          </CardTitle>
        </CardBody>
      </Card>
    </div>
     </div>
    )
}