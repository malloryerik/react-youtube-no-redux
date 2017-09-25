import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    } // The *only* time to set state in this manner is when we declare keys like this.
  }

  render() {
    return (
      <div className="search-bar">
        <input className="search-input"
          value={this.state.term}  // now "controlled "
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar