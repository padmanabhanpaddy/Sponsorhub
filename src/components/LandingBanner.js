import React from 'react'
import mobile from "../assets/mobile.png";
import '../styles/LandingBanner.css';
import { GiTakeMyMoney } from "react-icons/gi";
import { MdEmojiEvents } from "react-icons/md";
import { Link } from 'react-router-dom';



export default function LandingBanner() {
  return (
    <div className='LandingBannerRoot'>
        {/* Right Banner */}
        <div className='LandingBannerLeft'>

            {/* Container of row divs */}
            <div className='LandingBannerLeftBox'>

                {/* First Row div */}
                <div className='LandingBannerLeftFirstRow'>
                    <h1>3000 Sponsors In your pocket</h1>
                </div>

                {/* Second Row div */}
                <div className='LandingBannerLeftSecondRow'>
                    <p>Get sponsored on YouTube, Instagram and TikTok. Access a database of brands and hotels you can pitch to in seconds.</p>
                </div>

                {/* Third Row div */}
                <div className='LandingBannerLeftThirdRow'>
                    
                    {/* Column 1 button For Sponsors */}
                    <div id='sponsor_button' className='LandingBannerLeftButton'>
                        <GiTakeMyMoney></GiTakeMyMoney>
                        <b>Sponsors</b>
                    </div>

                    {/* Column 2 button For Organizers */}
                    <div id='event_button' className='LandingBannerLeftButton'>
                        <MdEmojiEvents></MdEmojiEvents>
                        <b>Events</b>
                    </div>


                </div>
            </div>

        </div>


        {/* Left Banner */}
        <div className='LandingBannerRight'>
            <img src={mobile} className='LandingBannerRightImage'></img>
        </div>
    </div>
  )
}
