import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';

import AdminItem from '../AdminItem/AdminItem';

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
    return (
      <div>
        <h1>Feedback Results</h1>
        <div>
          <table className="simpleTable">
            <thead>
              <tr>
                <th>Feeling</th>
                <th>Understanding</th>
                <th>Support</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {this.props.store.getDataReducer.map((item, index) => (
                <AdminItem key={index} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Admin);
