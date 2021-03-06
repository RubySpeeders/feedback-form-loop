import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

class Homepage extends Component {
  //resets the page on page load
  componentDidMount() {
    this.resetPage();
  }

  //moves to the first question page
  onStart = (event) => {
    event.preventDefault();
    this.props.history.push('/feeling');
  };

  //function resets the page
  resetPage() {
    this.props.dispatch({ type: 'START_PAGE' });
  }

  render() {
    return (
      <div>
        <Router>
          <nav>
            <ul className="navBar">
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </nav>
        </Router>
        <div>
          <h1>Answer some questions about your day!</h1>
        </div>
        <form onSubmit={this.onStart}>
          <Button variant="contained" color="primary" type="submit">
            Start
          </Button>
        </form>
      </div>
    );
  }
}

export default connect()(Homepage);
