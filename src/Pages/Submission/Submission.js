import React, { Component } from 'react';
import { connect } from 'react-redux';

class Submission extends Component {
  backToStart = (event) => {
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <p>Successfully submitted!</p>
        <button onClick={this.backToStart}>Back to Start</button>
      </div>
    );
  }
}

export default connect()(Submission);
