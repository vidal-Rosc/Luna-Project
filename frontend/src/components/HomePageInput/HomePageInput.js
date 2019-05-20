import React, { Component } from 'react'

import './HomePageInput.css'

class HomePageInput extends Component {
  render() {
    return (
      <div className='home-page-container'>
        <input className='home-page-input' placeholder='Search ...'/>
      </div>
    )
  }
}

export default HomePageInput