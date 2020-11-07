import React, { Component } from 'react';
import { connect } from 'react-redux';

class Homepage extends Component {
  state = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
  };

  componentDidMount() {
    this.resetPage();
  }

  onStart = (event) => {
    event.preventDefault();
    this.props.history.push('/feeling');
  };

  resetPage() {
    this.props.dispatch({ type: 'START_PAGE', payload: this.state });
  }

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

export default connect()(Homepage);
