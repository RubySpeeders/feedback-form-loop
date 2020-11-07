import React, { Component } from 'react';

class Homepage extends Component {
  onStart = (event) => {
    event.preventDefault();
    this.props.history.push('/feeling');
  };
  render() {
    return (
      <div>
        <div>
          <h1>Answer some questions about your day!</h1>
        </div>
        <form onSubmit={this.onStart}>
          <button>Start</button>
        </form>
      </div>
    );
  }
}

export default Homepage;
