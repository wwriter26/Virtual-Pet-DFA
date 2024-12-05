// Handles user interaction (e.g., clicking feed, play, or train).
import React from 'react';
import './ActionButtons.css';


const ActionButtons = ({ onAction, pet }) => {
  return (
    <div className="action-buttons">
      <button onClick={() => onAction(pet.feed)}>Feed</button>
      <button onClick={() => onAction(pet.play)}>Play</button>
      <button onClick={() => onAction(pet.train)}>Train</button>
    </div>
  );
}
export default ActionButtons;