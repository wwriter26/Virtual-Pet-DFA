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
    setTimeLeft(5);
  };

  //countdown effect
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          pet.ignore(); //trigger the ignore action when the timer reaches 0
          setPet(pet.clone()); //update the pet state
          resetTimer(); //reset 
          return 5; //restart the timer after ignore action
        }
        return prevTime - 1;
      });
    }, 1000); //update every second

    return () => clearInterval(timerInterval); //cleanup interval on unmount
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
