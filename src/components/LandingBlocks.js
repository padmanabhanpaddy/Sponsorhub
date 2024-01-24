import React from 'react'
import block_image from '../assets/landing-blocks-image.png';
import '../styles/LandingBlocks.css';

export default function LandingBlocks() {
  return (
    <div className='LandingBlockRoot'>

        {/* Left Half of block */}
        <div className='LandingBlockLeft'>

            {/* Flex div for 2 rows of div - title & desc */}
            <div className='LandingBlockLeftBox'>

                <div className='LandingBlockLeftTitle'>
                    <h1>3000+ brands at your finger tips</h1>
                </div>

                <div className='LandingBlockLeftDesc'>
                    <p>Mysocial Sponsors offers you access to the worlds largest database of brands who are are active in sponsoring influencers on YouTube, Instagram and TikTok.</p>
                </div>
            </div>

        </div>

        {/* Right Half of block */}
        <div className='LandingBlockRight'>
            <img src={block_image}></img>
        </div>

    </div>
  )
}
