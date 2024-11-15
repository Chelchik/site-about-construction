import React from 'react'
import logo from '../websiteImage/logo.png'

function Footer() {
  return (
    <footer>
    <div className="linksBox">
      <div className="footerInfo footerSiteLinks">
        <div className="logo">
          <img src={logo} alt="" className='logo-img' />
        </div>

        <span className='footerText'>
          Construction's core values have been shaped over more than 10 years of delivering the finest
          construction services to our clients. They stood to the test of time and these principles
          remain our bedrock lynchpins. We never tried to cut on either quality, the pace of work or
          any other construction aspect. We stay true to our full promise of efficiency!
        </span>
      </div>

      <div className="siteLinksBox footerSiteLinks">
        <h4>Navigation</h4>

        <div className="siteLinks">
          <a href="#">Industry News</a> 

          <a href="#">Projects in Development</a>

          <a href="#">Our Services</a>

          <a href="#">Contacts</a>
        </div>
      </div>

      <div className="comments footerSiteLinks">
        <h4>Recent Comments</h4>
        
        <div className='comment'>
            <p>Brian Williamson on</p>

            <span>Construction's core values have been shaped over more than 10 years of</span>
        </div>

        <div className='comment'>
            <p>Brian Williamson on</p>

            <span>Construction's core values have been shaped over more than 10 years of</span>
        </div>

        <div className='comment'>
            <p>Brian Williamson on</p>

            <span>Construction's core values have been shaped over more than 10 years of</span>
        </div>
      </div>

      <div className="contacts footerSiteLinks">
        <h4>Contacts</h4>

        <p>Address: 4578 Marmora Road, Glasgow, D04 89GR</p>

        <p>Phones: (800) 123-0045 (800) 123-0045</p>

        <span><p>E-mail:</p><a href="">info@demolink.org</a></span>

        <p>We are open Mn-Fr: 10 am-8 pm</p>
      </div>
    </div>
  </footer>  
  )
}

export default Footer