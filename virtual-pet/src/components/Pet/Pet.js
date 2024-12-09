import DFA from '../DFA/DFA';

class Pet extends DFA {
  constructor() {
    super();

    // Initialize sound effects for different actions
    this.sounds = {
      feed: new Audio(require('../../assets/images/sounds/feed.mp3')),
      play: new Audio(require('../../assets/images/sounds/play.mp3')),
      evolve: new Audio(require('../../assets/images/sounds/evolution.mp3')),
      train: new Audio(require('../../assets/images/sounds/train.mp3')),
      hatch: new Audio(require('../../assets/images/sounds/hatch.mp3')),
      dead: new Audio(require('../../assets/images/sounds/dead.mp3')),
    };

    this.resetInactivityTimer();     //start inactivity timer

  }

  playSound(action) {
    if (this.sounds[action]) {
      this.sounds[action].play();
    }
  }

  resetInactivityTimer() { //reset function?
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
    }
    if (this.getCurrentState() !== 'Dead') {
      this.inactivityTimer = setTimeout(() => {
        this.ignore();
      }, 10000); // 10 seconds
    }
  }

  ignore() {
    this.transition('ignore'); //call ignore transition (see DFA for path)
    this.playSound('dead');

    if (this.currentState === 'Dead') {
      clearTimeout(this.inactivityTimer); //stop the timer when pet is Dead
    } else {
      this.resetInactivityTimer(); //reset the timer for the new state
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
    if (this.currentState === 'Baby') {
      this.transition('feed');
      this.playSound('feed');
      this.resetInactivityTimer();
    }
  }

  play() {
    if (['Baby', 'Teen', 'Adult'].includes(this.currentState)) {
      this.transition('play');
      this.playSound('play');
      this.resetInactivityTimer();
    }
  }

  train() {
    if (this.currentState === 'Teen') {
      this.transition('train');
      this.playSound('train');
      this.resetInactivityTimer();
    }
  }

  evolve() {
    if (this.currentState === 'Adult') {
      this.transition('evolve');
      this.playSound('evolve');
      this.resetInactivityTimer();
    }
  }

  clone() {
    const newPet = new Pet();
    newPet.currentState = this.currentState;
    return newPet;
  }

  getPetStatus() {
    return {
      state: this.currentState,
    };
  }
}

export default Pet;
