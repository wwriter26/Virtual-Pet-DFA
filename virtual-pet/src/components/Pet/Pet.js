import DFA from '../DFA/DFA';

class Pet extends DFA {
  constructor() {
    super();
    this.hunger = 0;        // Init hunger (0 to 100, where 100 is full)
    this.happiness = 50;    // Init happiness (0 to 100)

    this.sounds = {

      feed: new Audio(require('../../assets/sounds/feed.mp3')),
      play: new Audio(require('../../assets/sounds/play.mp3')),
      evolve: new Audio(require('../../assets/sounds/evolution.mp3')),
      train: new Audio(require('../../assets/sounds/train.mp3')),
      hatch: new Audio(require('../../assets/sounds/hatch.mp3')),
      dead: new Audio(require('../../assets/sounds/dead.mp3')),
    };

    this.resetInactivityTimer(); // Start inactivity timer
  }

  playSound(action) {
    if (this.sounds[action]) {
      this.sounds[action].play();
    }
  }

  resetInactivityTimer() {
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
      this.inactivityTimer = null;
    }
  
    if (this.getCurrentState() !== 'Dead') {
      this.inactivityTimer = setTimeout(() => {
        if (this.getCurrentState() !== 'Dead') {
          this.ignore(); // Trigger ignore only once
        }
      }, 5000); // 5 seconds inactivity timer
    }
  }
  

  ignore() {
    this.hunger = Math.min(100, this.hunger - 20); // Increase hunger when ignored
    this.happiness = Math.max(0, this.happiness - 20); // Decrease happiness when ignored

    // Transition to the next state based on the `ignore` action
    const prevState = this.getCurrentState();
    this.transition('ignore');

    if (this.getCurrentState() === 'Dead') {
      this.playSound('dead');
    } else if (prevState === 'Evolved') {
      // Special case for Evolved: transition back to Adult
      this.currentState = 'Adult';
      this.resetInactivityTimer();
    } else {
      // Reset timer for all other states
      this.resetInactivityTimer();
    }
  }

  hatch() {
    if (this.currentState === 'Egg') {
      this.transition('hatch');
      this.playSound('hatch');
      this.resetInactivityTimer();
    }
  }

  feed() {
    if (['Baby', 'Teen', 'Adult'].includes(this.currentState)) {
      this.hunger = Math.max(0, this.hunger + 25);
      this.happiness = Math.min(100, this.happiness + 10);
      this.transition('feed');
      this.playSound('feed');
      this.resetInactivityTimer();
    }
  }

  play() {
    if (['Baby', 'Teen', 'Adult'].includes(this.currentState)) {
      this.happiness = Math.min(100, this.happiness + 25);
      this.hunger = Math.min(100, this.hunger + 10);
      this.transition('play');
      this.playSound('play');
      this.resetInactivityTimer();
    }
  }

  train() {
    if (this.currentState === 'Teen') {
      this.happiness = Math.min(100, this.happiness + 30);
      this.hunger = Math.min(100, this.hunger + 15);
      this.transition('train');
      this.playSound('train');
      this.resetInactivityTimer();
    }
  }

  evolve() {
    if (this.currentState === 'Adult' && this.hunger >= 30 && this.happiness >= 90) {
      this.transition('evolve');
      this.hunger = 0;
      this.happiness = 100;
      this.playSound('evolve');
      clearTimeout(this.inactivityTimer);
    }
  }

  clone() {
    const newPet = new Pet();
    newPet.currentState = this.currentState; // Clone the current state
    newPet.hunger = this.hunger;
    newPet.happiness = this.happiness;
    return newPet;
  }

  getPetStatus() {
    return {
      state: this.currentState,
      hunger: this.hunger,
      happiness: this.happiness,
    };
  }
}

export default Pet;
