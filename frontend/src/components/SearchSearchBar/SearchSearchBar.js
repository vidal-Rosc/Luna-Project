import React, { Component } from "react";

import "./SearchSearchBar.css";

class SearchSearchBar extends Component {
  state = {
    search: ""
  };

  searchHandler = event => {
    this.setState({
      search: event.currentTarget.value
    });
  };

  render() {
    return (
      <form className="search-search-bar-form">
        <input type="text" placeholder="Search" onChange={this.searchHandler} />
        <select>
          <option>Select a Category</option>
          <option>Italian</option>
          <option>Mexican</option>
        </select>
      </form>
    );
  }
}

export default SearchSearchBar;
