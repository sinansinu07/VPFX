import React from 'react'
import msg_icon from "../../Assets/Common/msg-icon.png"
import mail_icon from "../../Assets/Common/mail1.svg"
import phone_icon from "../../Assets/Common/phone1.svg"
import location_icon from "../../Assets/Common/location1.svg"
// import dark_arrow from "../../Assets/Common/dark-arrow.png"

import "./Contact.css"

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "f65ef0eb-57aa-45ba-91f7-aaf00dfe46ee");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };
  return (
    <div id="contact-us" className="contact-container">
        <h1 className="commonHeading">Get<span className="color"> In Touch</span></h1>
        <div className="contact container1">
            <div className="contact-col">
                <h3>Send Us a Message <img src={msg_icon} alt="" className="msg-icon"/></h3>
                <h2>Count on our friendly customer service team for all your needs.</h2>
                <ul>
                    <li><img src={mail_icon} alt=""/>info@vpfx.com</li>
                    <li><img src={phone_icon} alt=""/>+971 987654321</li>
                    <li><img src={location_icon} alt=""/>Office 3101, Latifa Tower,<br/> 
                        World Trade Center First,<br/>
                        Dubai, United Arab Emirates</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Enter Your Name" required/>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter Your Mobile" required/>
                    <label>Write Your Message</label>
                    <textarea name="message" rows="6" placeholder="Enter Your Message" required></textarea>
                    <button className="btn button-touch3">Submit Now
                            <span className="line">
                                <span className="circle"></span>
                            </span>
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    </div>
  )
}
export default Contact