class DFA {
  constructor() {
    this.states = ['Egg', 'Baby', 'Teen', 'Adult', 'Evolved', 'Dead'];
    this.currentState = 'Egg';
    this.transitions = {
      'Egg': { hatch: 'Baby' },
      'Baby': { play: 'Baby', feed: 'Teen', ignore: 'Dead' },
      'Teen': { play: 'Teen', train: 'Adult', ignore: 'Baby' },
      'Adult': { play: 'Adult', evolve: 'Evolved', ignore: 'Teen' },
      'Evolved': {},
      'Dead': {}, // No transitions from the Dead state
    };
  }

  transition(action) {
    const nextState = this.transitions[this.currentState][action];
    if (nextState) {
      this.currentState = nextState;
    }
  }

  getCurrentState() {
    return this.currentState;
  }
}

export default DFA;
