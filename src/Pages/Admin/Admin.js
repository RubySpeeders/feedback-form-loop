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
    return (
      <div>
        <h1>Feedback Results</h1>
        <div>{JSON.stringify(this.props.store.feedbackReducer)}</div>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Understanding</th>
              <th>Support</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        {/* <p>{listElements}</p> */}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Admin);
