import DFA from '../DFA/DFA';

class Pet extends DFA {
  constructor() {
    super();
    this.hunger = 0;
    this.happiness = 100;
  }

  hatch() {
    this.transition('hatch');
  }

  feed() {
    this.hunger = Math.max(0, this.hunger - 10);
    this.transition('feed');
  }

  play() {
    this.happiness = Math.min(100, this.happiness + 10);
    this.transition('play');
  }

  train() {
    this.happiness = Math.max(0, this.happiness - 5);
    this.transition('train');
  }

  getCurrentState() {
    return this.currentState;
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
