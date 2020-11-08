import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';

class Admin extends Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get('/feedback')
      .then((response) => {
        this.props.dispatch({
          type: 'GET_DATA',
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        swal('Something went wrong!');
      });
  };

  render() {
    // const listElements = this.props.store.feedbackReducer.map((item, index) => {
    //   return <li key={index}>{item}</li>;
    // });
    return <div>{JSON.stringify(this.props.store.feedbackReducer)}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Admin);
