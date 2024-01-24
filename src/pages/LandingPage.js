import React from 'react'
import LandingBanner from '../components/LandingBanner'
import LandingBlocks from '../components/LandingBlocks';
import LandingBlocksBlur from '../components/LandingBlocksBlur';
import Navbar from '../components/Navbar';
import "../styles/LandingPage.css";

export default function LandingPage() {

  return (
    <div className='LandingPageRoot'>

        <Navbar></Navbar>

        <LandingBanner></LandingBanner>

        <div className='LandingBlocksBox'>
            <LandingBlocks></LandingBlocks>
            <LandingBlocks></LandingBlocks>
            <LandingBlocks></LandingBlocks>
            <LandingBlocks></LandingBlocks>
        </div>

        <div className='LandingBlocksBlurBox'>
            <LandingBlocksBlur/>
            <LandingBlocksBlur/>
            <LandingBlocksBlur/>
        </div>
    </div>
  )
}
