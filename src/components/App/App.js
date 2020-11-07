import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Homepage from '../../Pages/Homepage/Homepage';
import Feeling from '../../Pages/Feeling/Feeling';
import Understanding from '../../Pages/Understanding/Understanding';
import Support from '../../Pages/Support/Support';
import Comments from '../../Pages/Comments/Comments';
import Review from '../../Pages/Review/Review';
import Submission from '../../Pages/Submission/Submission';

class App extends Component {
  startButton = (event) => {
    this.props.history.push('/feeling');
  };

  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <Router>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/feeling" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/submission" component={Submission} />
        </Router>
      </div>
    );
  }
}

export default App;
