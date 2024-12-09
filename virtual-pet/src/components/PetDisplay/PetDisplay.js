import React from "react";

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
    <div style={{ width: "300px", margin: "0 auto", textAlign: "center" }}>
      <h1>Pet Status</h1>
      <img
        src={getImageForState(pet.getCurrentState())}
        alt={pet.getCurrentState()}
        style={{ width: "100%" }}
      />
      {pet.getCurrentState() === "Dead" && (
        <h2 style={{ color: "red" }}>Your pet is dead 😢</h2>
      )}
    </div>
  );
};

export default PetDisplay;
