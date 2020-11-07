import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  onSubmitClick = (event) => {
    event.preventDefault();
    this.props.history.push('/finish');
    //this.saveData();
  };

  //saveData

  // onBackClick = (event) => {
  //   console.log('back clicked');
  //   this.props.history.push('/comments');
  // };

  render() {
    return (
      <div>
        <div>
          <p>Feeling: {this.props.store.feedbackReducer.feeling}</p>
          <p>Understanding: {this.props.store.feedbackReducer.understanding}</p>
          <p>Support: {this.props.store.feedbackReducer.support}</p>
          <p>Comments: {this.props.store.feedbackReducer.comments}</p>
        </div>
        <form onSubmit={this.onSubmitClick}>
          {/* <button onClick={this.onBackClick}>Back</button> */}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Review);
