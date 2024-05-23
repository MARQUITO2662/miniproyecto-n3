import React, { useState } from "react";
import "./GuestsButton.css";
import reduceIcon from '../img/reduce.png';
import addIcon from '../img/plus.png';

export const GuestsButton = ({ onClick }) => {
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  const handleAdultsIncrement = () => {
    if (adultsCount < 100) {
      setAdultsCount(adultsCount + 1);
    }
  };

  const handleAdultsDecrement = () => {
    if (adultsCount > 0) {
      setAdultsCount(adultsCount - 1);
    }
  };

  const handleChildrenIncrement = () => {
    if (childrenCount < 12) {
      setChildrenCount(childrenCount + 1);
    }
  };

  const handleChildrenDecrement = () => {
    if (childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
    }
  };

  const handleButtonClick = () => {
    setShowOptions(!showOptions); // Alternar la visibilidad de las opciones
  };

  return (
    <div className="guests-button-container">
      <button
        className="guests-button-add"
        onClick={handleButtonClick}
      >
        <strong>Guests</strong>
        <span className="guests-button-text">
          Add guests
        </span>
      </button>
      {showOptions && (
        <div className="guests-content">
          <div className="contain-title">
            <p className="guests-label">Adults</p>
            <p className="guests-description">Ages 13 or above</p>
          </div>
          <div className="contain-add-remove">
            <button onClick={handleAdultsDecrement}>
              <img src={reduceIcon} alt="Reduce adults" className="remove-icon" />
            </button>
            <span className="guests-counter">{adultsCount}</span>
            <button onClick={handleAdultsIncrement}>
              <img src={addIcon} alt="Add adults" className="add-icon" />
            </button>
          </div>
          <div className="contain-title">
            <p className="guests-label">Children</p>
            <p className="guests-description">Ages 2-12</p>
          </div>
          <div className="contain-add-remove">
            <button onClick={handleChildrenDecrement}>
              <img src={reduceIcon} alt="Reduce children" className="remove-icon" />
            </button>
            <span className="guests-counter">{childrenCount}</span>
            <button onClick={handleChildrenIncrement}>
              <img src={addIcon} alt="Add children" className="add-icon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
