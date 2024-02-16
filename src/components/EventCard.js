import React from "react";
import event_card_image from "../assets/event-card-image.avif";
import "../styles/EventCard.css";

export default function EventCard(props) {
  return (
    <div className="EventCardRoot">
      {/* Upper Big Div For Poster */}
      <div className="EventCardPoster">
        {/* <img src={props.images.length > 0 ? props.images[0].image : ''}  /> */}
        <img src={props.images ? props.images[0].image : ""} />
      </div>

      {/* Lower Medium Div For Text Detials */}
      <div className="EventCardDetails">
        {/* Include title, audience-size, type, location */}

        <div className="EventcardDetailsBlock">
          <p>
            <b>Event Name:</b> {props.name}
          </p>
        </div>

        <div className="EventcardDetailsAudienceBlock">
          <p>
            <b>Audience Footfall:</b> {props.max_audience}
          </p>
        </div>

        <div className="EventcardDetailsTypeBlock">
          <p>
            <b>Event Type:</b> {props.type}
          </p>
        </div>

        <div className="EventcardDetailsLocationBlock">
          <p>
            <b>Location:</b> {props.address}
          </p>
        </div>
      </div>
    </div>
  );
}
