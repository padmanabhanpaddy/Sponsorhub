import React from 'react'
import brand_logo from "../assets/brand_logo.jpg";
import '../styles/SponsorCard.css';

export default function SponsorCard(props) {
  return (
    <div className='SponsorCardRoot'>
    {/* Upper Big Div For Brand Poster */}
    <div className='SponsorCardPoster'>
        <img src={props.profile_image}></img>
    </div>


    {/* Lower Medium Div For Text Detials */}
    <div className='SponsorCardDetails'>
        {/* Include title, type */}

        <div className='SponsorcardDetailsBlock'>
            <p>Brand: {props.name}</p>
        </div>

        <div className='SponsorcardDetailsTypeBlock'>
            <p>Type: {props.type}</p>
        </div>
        
    </div>
</div>
  )
}
