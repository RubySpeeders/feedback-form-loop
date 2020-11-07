import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  state = {
    comments: '',
  };
  onNextClick = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'UPDATE_COMMENTS', payload: this.state });
    this.props.history.push('/review');
  };

  handleChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <p>Any comments you want to leave?</p>
        <form onSubmit={this.onNextClick}>
          <input
            required
            placeholder="Write your comments here"
            onChange={this.handleChange}
          ></input>
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(Comments);
