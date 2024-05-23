import React, { useState, useEffect } from "react";
import { Modal } from "../Modal/Modal";
import './Nav.css'
import Logo from '../img/logo.png'
import Red from '../img/red-search.png'
import {LocationButton} from "../Buttons/LocationButton";

export const Nav = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Helsinki, Finland"); // Estado inicial

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const updateSelectedLocation = (location) => {
    setSelectedLocation(location);
  };

  useEffect(() => {
    updateSelectedLocation("Helsinki, Finland");
  }, []);

  return (
    <nav className="nav-container">
      <div className="left-content">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <h1>Stays in Finland</h1>
      </div>
      <div className="right-content">
        <div className="search-container">
          <button onClick={openModal}>{selectedLocation}</button>
          <div className="AddGuests">
            <button onClick={openModal}>Add guests</button>
          </div>
          <button onClick={openModal}>
            <img src={Red} alt="search" />
          </button>
        </div>
        <h6>12+ stays</h6>
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal} selectedLocation={selectedLocation}>
        <LocationButton
          onLocationSelected={updateSelectedLocation}
          selectedLocation={selectedLocation}
        />
      </Modal>

    </nav>
  )
}
