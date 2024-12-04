class DFA {
  constructor() {
    this.states = ['Egg', 'Baby', 'Teen', 'Adult', 'Evolved'];
    this.currentState = 'Egg';
    this.transitions = {
      'Egg': { hatch: 'Baby' },
      'Baby': { feed: 'Teen', play: 'Baby' },
      'Teen': { train: 'Adult', ignore: 'Baby' },
      'Adult': { evolve: 'Evolved' },
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
