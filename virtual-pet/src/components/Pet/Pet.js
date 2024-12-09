import DFA from '../DFA/DFA';

class Pet extends DFA {
  constructor() {
    super();
    this.hunger = 0;
    this.happiness = 0;

    this.sounds = {
      feed: new Audio(require('../../assets/images/sounds/feed.mp3')),
      play: new Audio(require('../../assets/images/sounds/play.mp3')),
      evolve: new Audio(require('../../assets/images/sounds/evolution.mp3')),
      train: new Audio(require('../../assets/images/sounds/train.mp3')),
      hatch: new Audio(require('../../assets/images/sounds/hatch.mp3')),
    };
  }

  playSound(action) {
    if (this.sounds[action]) {
      this.sounds[action].play();
    }
  }

  hatch() {
    this.transition('hatch');
    this.playSound('hatch');
  }


  evolve() {
    if ((this.hunger === 100) && (this.happiness === 100)){
      this.transition('evolve');
      this.happiness = 0
      this.hunger = 0
      this.playSound('evolve');
    }
  }

  feed() {
    this.hunger = Math.min(100, this.hunger + 25);
    this.happiness = Math.min(100, this.happiness + 10);
    this.transition('feed');
    this.playSound('feed');
  }

  play() {
    this.happiness = Math.min(100, this.happiness + 25);
    this.hunger = Math.min(100, this.hunger - 10);
    this.playSound('play');
  }

  train() {
    this.happiness = Math.min(100, this.happiness + 30);
    this.hunger = Math.min(100, this.hunger - 15);
    this.transition('train');
    this.playSound('train');

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
