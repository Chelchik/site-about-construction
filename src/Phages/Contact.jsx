import React, { useContext, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import faceBook from '../websiteImage/Facebook_Logo_2023.png'
import pinterest from '../websiteImage/pinterest_logo_banner_3.1a80b27d24a3b9df3665d586ece0bb52d66df560.png'
import google from '../websiteImage/Google__G__logo.svg.png'
import twitter from '../websiteImage/Twitter_bird_logo_2012.svg.png'
import youTube from '../websiteImage/Logo_of_YouTube_(2013-2015).svg.png'
import { Theme } from '../context';

function Contact() {
  const { theme, setTheme } = useContext(Theme)
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [textError, setTextError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)

  const errorTextStyle = {
    color: "red",
    display: textError ? "block" : "none"
  }

  const errorEmailStyle = {
    color: "red",
    display: emailError ? "block" : "none"
  }

  const errorDescriptionStyle = {
    color: "red",
    display: descriptionError ? "block" : "none"
  }

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const textValue = (e) => {
    setText(e.target.value)
  }


  const emailValue = (e) => {
    setEmail(e.target.value)
  }

  const descriptionValue = (e) => {
    setDescription(e.target.value);
  }

  const submitFunc = (e) => {
    if (text.length == 0) {
      setTextError(true);
  }
  
  if (email.length == 0) {
    setEmailError(true);
  }
  
  if (description.length == 0) {
    setDescriptionError(true);
  }

  if (text.length >= 1) {
    setTextError(false);
}

if (email.length >= 1) {
  setEmailError(false);
}

if (description.length >= 1) {
  setDescriptionError(false);
}

    e.preventDefault(); 
    if (text.length >= 1 && email.length >= 1 && description.length >= 1) {
      setText("");
      setEmail("");
      setDescription("");
    }
  }

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <>
      <div className='map-box'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>

      <div className="form-box" style={{ color: theme ? "#fff" : "#000" }}>
        <div className='contactDetails'>
          <div className="line2">

          </div>

          <span className='communication-capabilities'>
            <h4>Address:</h4>
            <p className='communication0-apabilities-text' style={{ color: theme ? "#fff" : "#000" }}>4578 Marmora Road, Glasgow, D04 89GR</p>
          </span>

          <span className='communication-capabilities'>
            <h4>Phones:</h4>
            <p className='communication0-apabilities-text' style={{ color: theme ? "#fff" : "#000" }}>(800) 123-0045; (800) 123-0045</p>
          </span>

          <span className='communication-capabilities'>
            <h4>We are open:</h4>
            <p className='communication0-apabilities-text' style={{ color: theme ? "#fff" : "#000" }}>Mn-Fr: 10 am-8 pm</p>
          </span>

          <div className='social-networks'>
            <a href="">
              <img src={faceBook} alt="" className='social-networks-img' />
            </a>

            <a href="">
              <img src={twitter} alt="" className='social-networks-img' />
            </a>

            <a href="">
              <img src={google} alt="" className='social-networks-img' />
            </a>

            <a href="">
              <img src={youTube} alt="" className='social-networks-img' />
            </a>

            <a href="">
              <img src={pinterest} alt="" className='social-networks-img' />
            </a>
          </div>
        </div>

        <form onSubmit={submitFunc}>
          <div className="line2">

          </div>

          <h3>Get in Touch</h3>

          <div className='inputBox'>
            <input type="text" placeholder='Your name' value={text} onChange={textValue} />

            <p style={errorTextStyle}>you don't see the text in the field</p>
          </div>

          <div className='inputBox'>
            <input type="email" placeholder='Your e-mail' value={email} onChange={emailValue} />

            <p style={errorEmailStyle}>you don't see the text in the field</p>
          </div>

          <div className='inputBox'>
            <textarea placeholder='Your message' rows={7} value={description} onChange={descriptionValue}></textarea>

            <p style={errorDescriptionStyle}>you don't see the text in the field</p>
          </div>

          <input type="submit" value="SEND" id='submit' />
        </form>
      </div>
    </>
  )
}

export default Contact