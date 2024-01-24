import React from 'react'
import blur_logo from '../assets/blur-logo.svg';
import '../styles/LandingBlocksBlur.css';

export default function LandingBlocksBlur() {
  return (
    <div className='LandingBlocksBlurRoot'>

        <div className='LandingBlocksBlurLogo'>
            <img src={blur_logo}></img>
        </div>

        <div className='LandingBlocksBlurTitle'>
            <h2>Explore Sponsors</h2>
        </div>

        <div className='LandingBlocksBlurDesc'>
            <p>Get personal recommendations on brands that can sponsor you.</p>   
        </div>
    </div>
  )
}
