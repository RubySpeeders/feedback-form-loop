import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/Button';
import spacing from '@material-ui/core/Button';

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
          {/* <TextareaAutosize
            placeholder="Write your comments here"
            variant="outlined"
          /> */}
          <input
            type="text"
            placeholder="Comments"
            onChange={this.handleChange}
          ></input>
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
