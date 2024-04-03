import React from 'react'
import "../styles/Footer.css"
import logo from "../assets/navbar-logo.png"
import MaxWidth from './MaxWidth'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
const Footer = () => {
  return (
    <footer className='mainFooterBody'>
      <div className="brandImage">
        <img src={logo} alt="" />
      </div>
      <MaxWidth>
      <div className="infoAbout">
      SponsorsHub is a marketplace for event sponsorships.
      <br/>We make it easy to find and sponsor events to engage with your brand’s target audience
      </div>
      </MaxWidth>
      <div className="socialMediaLinks">
        <div className="facebook">
        <FaFacebookSquare /> /SponsorsHubfb
        </div>
        <div className="twitter">
        <FaSquareXTwitter /> /SponsorsHubX
        </div>
        <div className="linkedin">
        <FaLinkedin /> /SponsorsHub
        </div>
        <div className="instagram">
        <FaInstagramSquare /> /SponsorsHub
        </div>
      </div>
      <div className="copyRights">
        <hr/>
      © 2024 SponsorsHub India | All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
