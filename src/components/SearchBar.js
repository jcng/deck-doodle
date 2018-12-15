import React, { Component } from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <label>
          Card Filter:&nbsp;
          <input type="text" name="search-bar" onChange={this.props.handleSearchChange} />
        </label>
      </form>
    )
  }
}

export default SearchBar;