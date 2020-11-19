import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';

class Comments extends Component {
  state = {
    comments: '',
  };

  //dispatches comments to reducer, goes to review page
  onNextClick = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'UPDATE_FEEDBACK', payload: this.state });
    this.props.history.push('/review');
  };

  //targets the value of comments
  handleChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  //goes back a page
  onBackClick = (event) => {
    this.props.history.push('/support');
  };

  render() {
    return (
      <div>
        <p>Any comments you want to leave?</p>
        <p>(optional)</p>
        <form onSubmit={this.onNextClick}>
          <TextField
            id="multiline-comments"
            multiline
            rows={4}
            label="Comments"
            variant="outlined"
            onChange={this.handleChange}
          />
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={this.onBackClick}
              m={30}
            >
              Back
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Next
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(Comments);
