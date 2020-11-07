import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  onNextClick = (event) => {
    event.preventDefault();
    this.props.history.push('/support');
  };
  render() {
    return (
      <div>
        <p>How well are you understanding the content?</p>
        <form onSubmit={this.onNextClick}>
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(Understanding);
