import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import Button from '@material-ui/core/Button';

class Review extends Component {
  onSubmitClick = (event) => {
    event.preventDefault();
    this.saveData(this.props.store.feedbackReducer);
  };

  saveData(newFeedback) {
    axios
      .post('/feedback', newFeedback)
      .then((response) => {
        this.props.history.push('/submission');
      })
      .catch((err) => {
        console.log(err);
        swal('Something went wrong!');
      });
  }

  onBackClick = (event) => {
    this.props.history.push('/comments');
  };

  render() {
    return (
      <div>
        <div>
          <p>Please review your answers:</p>
          <div className="feedback">
            <p>Feeling: {this.props.store.feedbackReducer.feeling}</p>
            <p>
              Understanding: {this.props.store.feedbackReducer.understanding}
            </p>
            <p>Support: {this.props.store.feedbackReducer.support}</p>
            <p>Comments: {this.props.store.feedbackReducer.comments}</p>
          </div>
        </div>
        <form onSubmit={this.onSubmitClick}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.onBackClick}
          >
            Back
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Review);
