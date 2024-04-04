import React from 'react'

export default function PayForEventCard(props) {
  return (
    <div className='EventAcceptSponsorRoot'>
    {/* Upper Big Div For Poster */}
    <div className='EventCardPoster'>
    {/* <img src={props.images.length > 0 ? props.images[0].image : ''}  /> */}
    <img src={props.images?props.images[0]['image']:""}  />
    </div>


    {/* Lower Medium Div For Text Detials */}
    <div className='EventCardDetails'>
        {/* Include title, audience-size, type, location */}

        <div className='EventcardDetailsBlock'>
            <p><b>Event:</b> {props.name}</p>
        </div>

        <div className='EventcardDetailsAudienceBlock'>
            <p><b>Max Audience:</b> {props.max_audience}</p>
        </div>

        <div className='EventcardDetailsAudienceBlock'>
            <p><b>Price:</b> {props.amount}</p>
        </div>

        <div className='EventcardDetailsTypeBlock'>
            <p><b>Type:</b> {props.type}</p>
        </div>

        <div className='EventcardDetailsLocationBlock'>
            <p><b>Address:</b> {props.address}</p>
        </div>
        
        
    </div>
</div>
  )
}
