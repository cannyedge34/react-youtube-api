import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: ''
  };

  render() {
    return (
      <div className="row">
        <nav className="navbar navbar-dark bg-dark">
          <input
            className="form-control mr-sm-2"
            onChange={event => this.onInputChange(event.target.value)}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </nav>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
