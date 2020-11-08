import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Submission extends Component {
  backToStart = (event) => {
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <p>Successfully submitted!</p>
        <Button variant="contained" color="primary" onClick={this.backToStart}>
          Back to Start
        </Button>
      </div>
    );
  }
}

export default connect()(Submission);
