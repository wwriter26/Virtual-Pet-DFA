class DFA {
  constructor() {
    this.states = ['Egg', 'Baby', 'Teen', 'Adult', 'Evolved', 'Dead'];
    this.currentState = 'Egg';
    this.prevState = 'Baby';

    this.transitions = {
      'Egg': { hatch: 'Baby' },
      'Baby': { play: 'Baby', feed: 'Teen', ignore: 'Dead' },
      'Teen': { play: 'Teen', train: 'Adult', ignore: 'Baby' },
      'Adult': { play: 'Adult', evolve: 'Evolved', ignore: 'Teen' },
      'Evolved': {},
      'Dead': {},
    };
  }

  transition(action) {
    const nextState = this.transitions[this.currentState]?.[action];
    if (nextState) {
      this.currentState = nextState;
    }
  }

  getPrevState() {
    return this.prevState;
  }

  getCurrentState() {
    return this.currentState;
  }
}

export default DFA;
