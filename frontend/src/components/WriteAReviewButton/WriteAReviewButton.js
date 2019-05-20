import React, { Component } from 'react'
import {withRouter} from "react-router";


import './WriteAReviewButton.css'

class WriteAReviewButton extends Component {

  wirteReviewHandler = (e) => {
    this.props.history.push(`/createreview/${this.props.match.params.id}`)
  }

  render() {
    return (
      <div>
        <button className='write-a-review-button' onClick={this.wirteReviewHandler}>WRITE A REVIEW</button>
      </div>
    )
  }
}

export default withRouter(WriteAReviewButton)
