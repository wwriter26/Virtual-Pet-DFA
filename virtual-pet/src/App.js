import './App.css';
import React, { useState, useEffect } from 'react';
import Pet from './components/Pet/Pet';
import PetDisplay from './components/PetDisplay/PetDisplay';
import ActionButtons from './components/ActionButtons/ActionButtons';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [pet, setPet] = useState(new Pet());
  const [timeLeft, setTimeLeft] = useState(5); 

  const handleAction = (action) => {
    const clonedPet = pet.clone();
    clonedPet[action]();
    setPet(clonedPet);
    resetTimer();
  };

  //function to reset the timer
  const resetTimer = () => {
    setTimeLeft(15);
  };

  //countdown effect
  useEffect(() => {
    let count = 0; // Local variable to track if ignore has been triggered
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1 && count === 0) {
          // At 1, trigger ignore action
          count = 1; // Mark that ignore has been triggered
          const clonedPet = pet.clone();
          clonedPet.ignore(); // Trigger ignore action
          setPet(clonedPet); // Update the pet state
          return 15; // Reset the timer to 5
        } else if (prevTime === 1) {
          return 15; // Ensure the timer resets cleanly after ignore action
        }
        return prevTime - 1; // Decrement timer normally
      });
    }, 1000); // Update every second
  
    return () => clearInterval(timerInterval); // Cleanup interval on unmount
  }, [pet]);
  
  // Reset `timeLeft` and `count` explicitly when the pet state changes
  useEffect(() => {
    setTimeLeft(15); // Reset the timer
  }, [pet]);
  
  


  return (
    <div>
      <Navbar />
      <PetDisplay pet={pet} timeLeft={timeLeft} />
      <ActionButtons onAction={handleAction} pet={pet} />
    </div>
  );
}

export default App;
