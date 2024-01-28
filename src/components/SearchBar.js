import React from "react";
import "../styles/SearchBar.css";

export default function SearchBar() {
  return (
    <div className="SearchBarRoot">
      {/* Upper Div For Title */}
      <div className="SearchBarUpper">
        <h2>Search For Events</h2>
      </div>

      {/* Lower Div Encopassing central div */}
      <div className="SearchBarLower">
        {/* Div encopassing input and button*/}
        <div className="SearchBarCentral">
          {/* Search bar input */}
          <div className="SearchBarInput">
            <input type="text" placeholder="Search Here"></input>
          </div>

          {/* Searchbar button */}
          <div className="SearchBarButton">
            <input type="button" value="Search"></input>
          </div>
        </div>
      </div>
    </div>
  );
}
