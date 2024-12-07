import React from "react";
import Status from "../Status/Status";

const PetDisplay = ({ pet }) => {
  const getImageForState = (state) => {
    try {
      // Dynamically import the image based on the state
      return require(`../../assets/images/${state}.png`);
    } catch (error) {
      console.error("Image not found for state:", state);
      return ""; // Fallback image or empty string
    }
  };

  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <h1>Pet Status</h1>
      <Status label="Hunger" value={pet.hunger} max={100} />
      <Status label="Happiness" value={pet.happiness} max={100} />
      <img
        src={getImageForState(pet.getCurrentState())}
        alt={pet.currentState}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default PetDisplay;
