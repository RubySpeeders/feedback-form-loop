import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  onSubmitClick = (event) => {
    event.preventDefault();
    this.props.history.push('/finish');
  };

  // onBackClick = (event) => {
  //   console.log('back clicked');
  //   this.props.history.push('/comments');
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitClick}>
          {/* <button onClick={this.onBackClick}>Back</button> */}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(Review);
