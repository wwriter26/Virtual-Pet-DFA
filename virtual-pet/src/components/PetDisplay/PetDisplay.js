import React from "react";

const PetDisplay = ({ pet, timeLeft }) => {
  const getImageForState = (state) => {
    try {
      return require(`../../assets/images/${state}.png`);
    } catch (error) {
      console.error("Image not found for state:", state);
      return "";
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
      <h2>State: {pet.getCurrentState()}</h2>
      <h3>Hunger: {pet.getPetStatus().hunger}</h3>
      <h3>Happiness: {pet.getPetStatus().happiness}</h3>
      <h3>Time until ignore: {timeLeft}s</h3>
      {pet.getCurrentState() === "Dead" && (
        <h2 style={{ color: "red" }}>Your pet is dead 😢</h2>
      )}
    </div>
  );
};

export default PetDisplay;
