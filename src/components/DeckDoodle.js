import React, { Component } from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
import DeckContainer from './DeckContainer';

class DeckDoodle extends Component {
  state = {
    query: ''
  }
  handleSearchChange = (event) => {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return (
      <div id="app-wrapper">
        <CardList cards={this.props.cards} query={this.state.query} />
        <SearchBar handleSearchChange={this.handleSearchChange} />
        <DeckContainer />
      </div>
    );
  }
}

export default DeckDoodle;
