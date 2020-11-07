import React, { Component } from 'react';

class Homepage extends Component {
  onStart = (event) => {
    event.preventDefault();
    this.props.history.push('/feeling');
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onStart}>
          <button>Start</button>
        </form>
      </div>
    );
  }
}

export default Homepage;
