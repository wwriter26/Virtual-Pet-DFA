import './App.css';
import React, { useState } from 'react';
import Pet from './components/Pet/Pet';
import PetDisplay from './components/PetDisplay/PetDisplay';
import ActionButtons from './components/ActionButtons/ActionButtons';
import Navbar from './components/Navbar/Navbar';


function App() {
  const [pet, setPet] = useState(new Pet());

  const handleAction = (action) => {
    pet[action]();
    // setPet(new Pet()); 
    setPet(Object.assign(Object.create(Object.getPrototypeOf(pet)), pet)); 
  };

  return (
    <div>
      <Navbar />
      <PetDisplay state={pet.currentState} pet={pet}/>
      <ActionButtons onAction={handleAction} pet={pet}/>
    </div>
  );
}


export default App;
