import React from 'react'
import "../styles/EventMainBanner.css"
import event_image from "../assets/event-card-image.avif"
import { GiTakeMyMoney } from "react-icons/gi";


export default function EventMainBanner(props) {
  return (
    <div className='EventMainBannerRoot'>

        <div className='EventMainBannerMain'>
            {/* Upper banner div with image */}
            <div className='EventBanner'>
                <img src={props.data.images}></img>
            </div>

            {/* Mid Event Title, Duration, Language, Type */}
            <div className='EventMidInfo'>
                <div className='EventMidInfoTitle'>
                    <h3>{props.data.name}</h3>
                </div>

                <div className='EventMidInfoDetails'>
                    <ul>
                        <li>Bollywood | </li>
                        <li>Hindi | </li>
                        <li>All Age groups | </li>
                        <li>3hrs 30 mins</li>
                    </ul>
                </div>
            </div>


            {/* Lower Event Info - Date, Time, Location */}
            {/* <div className='EventLowerInfo'>

            </div> */}


            

        </div>
        



    </div>
  )
}
