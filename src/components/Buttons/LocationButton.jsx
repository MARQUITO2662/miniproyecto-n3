import React, { useState } from "react";
import "./LocationButton.css";
import locationIcon from '../img/location.png';

 export const LocationButton = ({ onLocationSelected }) => {
  const [locationListOpen, setLocationListOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Helsinki, Finland");

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setLocationListOpen(!locationListOpen);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    setLocationListOpen(false);
    onLocationSelected(location);
  };

  return (
    <div className="location-button-container" onClick={() => setLocationListOpen(false)}>
      <button
        className={`location-button ${locationListOpen ? "active" : ""}`}
        onClick={handleButtonClick}
      >
        <strong>Location:</strong>
        {selectedLocation && (
          <span className="selected-location"> {selectedLocation}</span>
        )}
      </button>
      {locationListOpen && (
        <ul className="location-list">
          <li onClick={(event) => event.stopPropagation()}>
            <img src={locationIcon} alt="Location icon" className="location-icon" />
            <button
              className="location-option"
              onClick={() => handleLocationClick("Helsinki, Finland")}
            >
              Helsinki, Finland
            </button>
          </li>
          <li onClick={(event) => event.stopPropagation()}>
            <img src={locationIcon} alt="Location icon" className="location-icon" />
            <button
              className="location-option"
              onClick={() => handleLocationClick("Turku, Finland")}
            >
              Turku, Finland
            </button>
          </li>
          <li onClick={(event) => event.stopPropagation()}>
            <img src={locationIcon} alt="Location icon" className="location-icon" />
            <button
              className="location-option"
              onClick={() => handleLocationClick("Oulu, Finland")}
            >
              Oulu, Finland
            </button>
          </li>
          <li onClick={(event) => event.stopPropagation()}>
            <img src={locationIcon} alt="Location icon" className="location-icon" />
            <button
              className="location-option"
              onClick={() => handleLocationClick("Vaasa, Finland")}
            >
              Vaasa, Finland
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

