import React, { useState } from 'react';
import './PopupForm.css';
import logo from "../../Assets/Common/logovpfx.png"
import closeButton from "../../Assets/Common/close.png"
import paper_plane from "../../Assets/Common/paper-plane.png"
// import fliplogo from "../../Assets/Common/fliplogo.gif"

function PopupForm({ handleClose }) {
    const [result, setResult] = useState("");
    const [otherOption, setOtherOption] = useState(false)

    const [loading, setLoading] = useState(false);

  const handleServiceChange = (event) => {
    setOtherOption(event.target.value === "Other")
  }
 
  const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 2000); // Simulate a loading state for 3 seconds
        
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
        setTimeout(handleClose, 1500);
        } else {
        console.log("Error", data);
        setResult(data.message);
      }
  };
  return (
    <div className="modal-overlay">
      <div className={`modal-content  ${ otherOption ? "height" : ""}`}>
        <img src={closeButton} alt="" className="closeButton" onClick={() => { handleClose() }}/>
        <div className="left">
            {/* <h1>rabbotandcarrot</h1> */}
            <img src={logo} alt="" />
            <p>We’re all about crafting trading experiences that stand out and make an impact for the clients we serve.
            </p>
        </div>
        <div className="right">
          <div className="contact-col">
            <h1>Get In Touch</h1>
            <form onSubmit={handleSubmit}>
                {/* <label>Your Name</label> */}
                <input type="text" name="name" placeholder="Enter Your Name" required/>
                {/* <label>Phone Number</label> */}
                <input type="tel" name="phone" placeholder="Enter Your Mobile" required/>
                {/* <label>Email</label> */}
                <input type="email" name="email" placeholder="Enter Your Email" required/>
                <select name="services" onChange={handleServiceChange} required>
                  <option value="">Services</option>
                  <option value="MT5 - MetaTrader">MT5 - MetaTrader</option>
                  <option value="MetaTrader - Googl Play">MetaTrader - Google Play</option>
                  <option value="MetaTrader - App Store<">MetaTrader - App Store</option>
                  <option value="Trading Signal">Trading Signal</option>
                  <option value="VPFX - MAM / PAMM">VPFX - MAM / PAMM</option>
                  <option value="Other">Other</option>
                </select>
                { otherOption && <input type="text" name="Other Services" placeholder="Enter Your Requirements" required/>}
                <button
                    className={`btn1 ${loading ? 'loading' : ''}`}
                    disabled={loading}
                >
                    <i><img src={paper_plane} alt="" /></i>
                    <span className="text">
                        { loading ? "Sending" : "Submit"}
                    </span>
                    <span className="loading-animate"></span>
                </button>
            </form>
            <span className="result">{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupForm;