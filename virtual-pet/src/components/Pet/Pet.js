import DFA from '../DFA/DFA';

class Pet extends DFA {
  constructor() {
    super();
    this.hunger = 0;
    this.happiness = 0;
  }

  hatch() {
    this.transition('hatch');
  }

  evolve() {
    if ((this.hunger === 100) && (this.happiness === 100)){
      this.transition('evolve');
      this.happiness = 0
      this.hunger = 0
    }
  }

  feed() {
    this.hunger = Math.min(100, this.hunger + 25);
    this.happiness = Math.min(100, this.happiness + 10);
    this.transition('feed');
  }

  play() {
    this.happiness = Math.min(100, this.happiness + 25);
    this.hunger = Math.min(100, this.hunger - 10);
  }

  train() {
    this.happiness = Math.min(100, this.happiness + 30);
    this.hunger = Math.min(100, this.hunger - 15);
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
