import React, { Component } from 'react';
import Card from './Card';

class DeckContainer extends React.Component {
  state = {
    cards: []
  }
  handleDragOver = (event) => {
    event.preventDefault();
  }
  handleDrop = (event) => {
    event.preventDefault();
    const droppedCard = JSON.parse(event.dataTransfer.getData("card"));
    this.setState({
      cards: [...this.state.cards, droppedCard]
    })
  }
  render() {
    console.log(this.state.cards);
    const deckList = this.state.cards.map((card) =>
      <Card card={card} />
    );
    return (
      <div className="deck-container deck-container--droppable"
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}>
        {deckList}
      </div>
    )
  }
}

export default DeckContainer;