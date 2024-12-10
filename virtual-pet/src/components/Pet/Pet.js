import DFA from '../DFA/DFA';

class Pet extends DFA {
  constructor() {
    super();
    this.hunger = 0;        //init hunger (0 to 100, where 100 is full)
    this.happiness = 50;    // init happiness (0 to 100)

    this.sounds = {
      feed: new Audio(require('../../assets/images/sounds/feed.mp3')),
      play: new Audio(require('../../assets/images/sounds/play.mp3')),
      evolve: new Audio(require('../../assets/images/sounds/evolution.mp3')),
      train: new Audio(require('../../assets/images/sounds/train.mp3')),
      hatch: new Audio(require('../../assets/images/sounds/hatch.mp3')),
      dead: new Audio(require('../../assets/images/sounds/dead.mp3')),
    };

    this.resetInactivityTimer(); //start inactivity timer
  }

  playSound(action) {
    if (this.sounds[action]) {
      this.sounds[action].play();
    }
  }

  resetInactivityTimer() {
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
    }

    if (this.getCurrentState() !== 'Dead') {
      this.inactivityTimer = setTimeout(() => {
        this.ignore();
      }, 5000); //5 seconds inactivity timer
    }
  }

  ignore() {
    this.hunger = Math.min(100, this.hunger + 20); //increase hunger when ignored
    this.happiness = Math.max(0, this.happiness - 20); //decrease happiness when ignored

    this.transition('ignore');

    if (this.getCurrentState() !== 'Dead') {
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
    if (this.currentState === 'Baby' || this.currentState === 'Teen' || this.currentState === 'Adult') {
      this.hunger = Math.max(0, this.hunger - 25);
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
    if (this.currentState === 'Adult' && this.hunger <= 30 && this.happiness >= 90) {
      this.transition('evolve');
      this.hunger = 0;
      this.happiness = 100;
      this.playSound('evolve');
      this.resetInactivityTimer();
    }
  }

  clone() {
    const newPet = new Pet();
    newPet.currentState = this.currentState;
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
