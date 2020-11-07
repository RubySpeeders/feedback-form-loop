import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  onNextClick = (event) => {
    event.preventDefault();
    this.props.history.push('/comments');
  };
  render() {
    return (
      <div>
        <p>How well are you being supported?</p>
        <form onSubmit={this.onNextClick}>
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(Support);
