import React from 'react';
import ReactDOM from 'react-dom';
import DeckDoodle from './components/DeckDoodle';
import './css/main.css';


// Placeholder test data
const CARDS = [
  { id: 1, name: 'Lightning Bolt', image: 'https://via.placeholder.com/100x150' },
  { id: 2, name: 'Snapcaster Mage', image: 'https://via.placeholder.com/100x150' },
  { id: 3, name: 'Thoughtseize', image: 'https://via.placeholder.com/100x150' },
  { id: 4, name: "Kolaghan's Command", image: 'https://via.placeholder.com/100x150' },
  { id: 5, name: 'Opt', image: 'https://via.placeholder.com/100x150' },
  { id: 6, name: 'Inquisition of Kozilek', image: 'https://via.placeholder.com/100x150' },
  { id: 7, name: 'Crackling Drake', image: 'https://via.placeholder.com/100x150' },
  { id: 8, name: 'Liliana of the Veil', image: 'https://via.placeholder.com/100x150' },
  { id: 9, name: 'Fatal Push', image: 'https://via.placeholder.com/100x150' },
  { id: 10, name: 'Dreadbore', image: 'https://via.placeholder.com/100x150' }
]

ReactDOM.render(<DeckDoodle cards={CARDS}/>, document.getElementById('root'));