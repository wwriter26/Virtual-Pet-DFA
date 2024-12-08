// Handles user interaction (e.g., clicking feed, play, or train).
import React from 'react';
import './ActionButtons.css';


const ActionButtons = ({ onAction, pet }) => {
  const valid = pet.transitions[pet.getCurrentState()];

  return (
    <div className="action-buttons">
      <button onClick={() => onAction('feed')}
        disabled={!valid.feed}>Feed</button>

      <button onClick={() => onAction('play')}
        disabled={!valid.play}>Play</button>

      <button onClick={() => onAction('train')}
        disabled={!valid.train}>Train</button>

      <button onClick={() => onAction('hatch')}
        disabled={!valid.hatch}>Hatch</button>

      <button onClick={() => onAction('evolve')}
        disabled={!valid.evolve}>Evolve</button>
    </div>
  );
}
export default ActionButtons;