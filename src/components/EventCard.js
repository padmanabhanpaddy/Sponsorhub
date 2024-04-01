import React from "react";
import eventimage from "../assets/event image.jpg";
import "../styles/EventCard.css";

export default function EventCard(props) {
  return (
    <div className="EventCardMainDiv">
      {/* Upper Big Div For Poster */}
      <div className="EventCardPoster">
        {/* <img src={props.images.length > 0 ? props.images[0].image : ''}  /> */}
        <img src={props.images ? props.images[0].image : { eventimage }} />
      </div>

      {/* Lower Medium Div For Text Detials */}
      <div className="EventCardDetails">
        {/* Include title, audience-size, type, location */}

        <div className="EventcardDetailsBlock">
          <p className="InfoText">
            <b>Event Name:</b> {props.name}
          </p>
        </div>

        <div className="EventcardDetailsAudienceBlock">
          <p className="InfoText">
            <b>Audience Footfall:</b> {props.max_audience}
          </p>
        </div>

        <div className="EventcardDetailsTypeBlock">
          <p className="InfoText">
            <b>Event Type:</b> {props.type}
          </p>
        </div>

        <div className="EventcardDetailsLocationBlock">
          <p className="InfoText">
            <b>Location:</b> {props.address}
          </p>
        </div>
      </div>
    </div>
  );
}
