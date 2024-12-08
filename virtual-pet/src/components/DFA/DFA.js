class DFA {
  constructor() {
    this.states = ['Egg', 'Baby', 'Teen', 'Adult', 'Evolved'];
    this.currentState = 'Egg';
    this.transitions = {
      'Egg': { hatch: 'Baby' },
      'Baby': { feed: 'Baby', play: 'Baby', evolve: 'Teen' },
      'Teen': { train: 'Teen', feed: 'Teen', evolve: 'Adult' },
      'Adult': { evolve: 'Evolved', feed: 'Adult', train: 'Adult' },
      'Evolved': {},
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
