class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    const originalOrder = [...this.cards];
    const newOrder = [];
    for (let i = 0; i < this.cards.length; i++) {
      const cardIndex = Math.floor(Math.random() * originalOrder.length);
      newOrder.push(originalOrder.splice(cardIndex, 1)[0]);
    }
    this.cards = newOrder;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
    }
    return card1 === card2;
  }

  checkIfFinished() {
    return this.cards.length / 2 === this.pairsGuessed;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
