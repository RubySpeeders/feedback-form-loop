import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  onNextClick = (event) => {
    event.preventDefault();
    this.props.history.push('/understanding');
  };
  render() {
    return (
      <div>
        <p>How are you feeling today?</p>
        <form onSubmit={this.onNextClick}>
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(Feeling);
