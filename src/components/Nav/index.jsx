import React, { useState, useEffect } from "react";
import { Modal } from "../Modal/Modal";
import './Nav.css'
import Logo from '../img/logo.png'
import Red from '../img/red-search.png'
import { LocationButton } from "../Buttons/LocationButton";
import { GuestsButton } from "../Buttons/GuestsButton";

export const Nav = ({ setFilteredData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Helsinki, Finland");
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('stays.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const updateSelectedLocation = (location) => {
    setSelectedLocation(location);
  };

  const updateGuests = (adultCount, childCount) => {
    setAdultsCount(adultCount);
    setChildrenCount(childCount);
  };

  const applyFilters = () => {
    const filteredData = data.filter(item =>
      item.city === selectedLocation.split(",")[0] &&
      item.maxGuests >= adultsCount + childrenCount
    );
    setFilteredData(filteredData);
    closeModal();
  };

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
          <button onClick={applyFilters}>
            <img src={Red} alt="search" />
          </button>
        </div>
        <h6>12+ stays</h6>
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <LocationButton
          onLocationSelected={updateSelectedLocation}
          selectedLocation={selectedLocation}
        />
        <GuestsButton
          adults={adultsCount}
          children={childrenCount}
          onGuestsChange={updateGuests}
        />
        <button onClick={applyFilters}>Apply</button>
      </Modal>
    </nav>
  );
};