import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  onNextClick = (event) => {
    event.preventDefault();
    this.props.history.push('/review');
  };
  render() {
    return (
      <div>
        <p>Any comments you want to leave?</p>
        <form onSubmit={this.onNextClick}>
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(Comments);
