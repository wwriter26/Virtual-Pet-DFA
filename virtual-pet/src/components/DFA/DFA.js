class DFA {
  constructor() {
    this.states = ['Egg', 'Baby', 'Teen', 'Adult', 'Evolved', 'Dead'];
    this.currentState = 'Egg';

    this.transitions = {
      'Egg': { hatch: 'Baby' },
      'Baby': { play: 'Baby', feed: 'Teen' },
      'Teen': { play: 'Teen', train: 'Adult' },
      'Adult': { play: 'Adult', evolve: 'Evolved' },
      'Evolved': {},
      'Dead': {}, // No transitions from the Dead state
    };

    // Define fallback sequences for the ignore action
    this.ignoreSequence = {
      'Adult': 'Teen',
      'Teen': 'Baby',
      'Baby': 'Dead',
    };
  }

  transition(action) {
    if (action === 'ignore' && this.ignoreSequence[this.currentState]) {
      this.currentState = this.ignoreSequence[this.currentState];
    } else {
      const nextState = this.transitions[this.currentState]?.[action];
      if (nextState) {
        this.currentState = nextState;
      }
    }
  }

  getCurrentState() {
    return this.currentState;
  }
}

export default DFA;
