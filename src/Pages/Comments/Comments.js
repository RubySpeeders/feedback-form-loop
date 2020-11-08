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

  onBackClick = (event) => {
    this.props.history.push('/support');
  };

  render() {
    return (
      <div>
        <p>Any comments you want to leave?</p>
        <p>(optional)</p>
        <form onSubmit={this.onNextClick}>
          <input
            type="text"
            placeholder="Write your comments here"
            onChange={this.handleChange}
          ></input>
          <div>
            <button type="button" onClick={this.onBackClick}>
              Back
            </button>
            <button>Next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(Comments);
