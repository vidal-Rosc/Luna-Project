import React, { Component } from 'react'
import SearchSearchBar from '../../components/SearchSearchBar/SearchSearchBar';
import SearchNavigationTabs from '../../components/SearchNavigationTabs/SearchNavigationTabs'

class SearchPage extends Component {

  render() {
    return (
      <div>
        <SearchSearchBar/>
        <SearchNavigationTabs/>
      </div>
    )
  }
}

export default SearchPage;