import React from "react";
import "../styles/ChatCard.css";

export default function ChatCard(props) {
  return (
    <div className="EventCardRoot">
      {/* Upper Big Div For Poster */}
      <div className="EventCardPoster">
        {/* <img src={props.images.length > 0 ? props.images[0].image : ''}  /> */}
        <img src={props.data.images ? props.data.images[0].image : ""} />
      </div>

      {/* Lower Medium Div For Text Detials */}
      <div className="EventCardDetails">
        {/* Include title, audience-size, type, location */}

        <div className="EventcardDetailsBlock">
          <p>
            <b>Name:</b> {props.data.name}
          </p>
        </div>



        
      </div>
    </div>
  );
}
