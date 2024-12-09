import './App.css';
import React, { useState, useEffect } from 'react';
import Pet from './components/Pet/Pet';
import PetDisplay from './components/PetDisplay/PetDisplay';
import ActionButtons from './components/ActionButtons/ActionButtons';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [pet, setPet] = useState(new Pet());

  const handleAction = (action) => {
    pet[action]();         // Perform the action on the pet instance
    setPet(pet.clone());   // Clone the pet to trigger a re-render
  };
  
  // Handle inactivity-triggered updates by directly resetting pet state
  useEffect(() => {
    const timer = pet.inactivityTimer;
    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, [pet]);

  return (
    <div>
      <Navbar />
      <PetDisplay pet={pet} />
      <ActionButtons onAction={handleAction} pet={pet} />
    </div>
  );
}

export default App;
