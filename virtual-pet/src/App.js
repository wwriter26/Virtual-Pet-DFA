import './App.css';
import React, { useState } from 'react';
import Pet from './components/Pet/Pet';
import PetDisplay from './components/PetDisplay/PetDisplay';
import StatusIndicators from './components/Status/Status';
import ActionButtons from './components/ActionButtons/ActionButtons';


function App() {
  const [pet, setPet] = useState(new Pet());

  const handleAction = (action) => {
    pet[action]();
    setPet({ ...pet });
  };

  return (
    <div>
      <PetDisplay state={pet.currentState} />
      <StatusIndicators hunger={pet.hunger} happiness={pet.happiness} />
      <ActionButtons onAction={handleAction} />
    </div>
  );
}


export default App;
