import React from 'react'

export default function AcceptSponsorCard(props) {
  return (
    <div className='EventCardRoot'>
    {/* Upper Big Div For Poster */}
    <div className='EventCardPoster'>
    {/* <img src={props.images.length > 0 ? props.images[0].image : ''}  /> */}
    <img src={props.profile_image?props.profile_image:""}  />
    </div>


    {/* Lower Medium Div For Text Detials */}
    <div className='EventCardDetails'>
        {/* Include title, audience-size, type, location */}

        <div className='EventcardDetailsBlock'>
            <p><b>Sponsor:</b> {props.name}</p>
        </div>


        <div className='EventcardDetailsTypeBlock'>
            <p><b>Type:</b> {props.type}</p>
        </div>

        <div className='EventcardDetailsLocationBlock'>
            <p><b>Address:</b> {props.address}</p>
        </div>

        <div className='EventcardDetailsLocationBlock'>
            <p><b>Amount:</b> {props.amount}</p>
        </div>
        
        
    </div>
</div>
  )
}
