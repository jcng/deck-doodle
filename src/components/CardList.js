import React, { Component } from 'react';
import Card from './Card';

const CardList = (props) => {
  // Returns boolean representing whether a given cardName contains query
  const queryTerm = (cardName, query) => {
    const regex = new RegExp(`.*${query}.*`, 'gi');
    return cardName.match(regex);
  }

  const list = props.cards.map((card) => {
    if (queryTerm(card.name, props.query)) {
      return (<Card card={card} />);
    }
  });
  return (
    <ul className="card-list">
      {list}
    </ul>
  );
}

export default CardList;
