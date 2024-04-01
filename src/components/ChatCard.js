import React from "react";
import "../styles/ChatCard.css";

export default function ChatCard(props) {
  return (
    <div className="EventCardRoot">
      {/* Upper Big Div For Poster */}

      {/* Lower Medium Div For Text Detials */}
      <div className="EventCardDetails">
        {/* Include title, audience-size, type, location */}

        <div className="EventcardDetailsBlock">
          <p>
            <b>Chat With: </b> {props.data.name} <span className="ArrowAnimation">&rarr;</span>
          </p>
        </div>



        
      </div>
    </div>
  );
}
