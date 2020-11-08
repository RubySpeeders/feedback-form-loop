import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  state = {
    understanding: '',
  };

  onRadioChange = (event) => {
    this.setState({
      understanding: event.target.value,
    });
  };

  onNextClick = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'UPDATE_UNDERSTANDING', payload: this.state });
    this.props.history.push('/support');
  };

  onBackClick = (event) => {
    this.props.history.push('/feeling');
  };

  render() {
    return (
      <div>
        <p>How well are you understanding the content?</p>
        <form onSubmit={this.onNextClick}>
          <input
            required
            type="radio"
            id="one"
            name="understanding"
            value="1"
            checked={this.state.understanding === '1'}
            onChange={this.onRadioChange}
          ></input>
          <label htmlFor="one">1</label>

          <input
            type="radio"
            id="two"
            name="understanding"
            value="2"
            checked={this.state.understanding === '2'}
            onChange={this.onRadioChange}
          ></input>
          <label htmlFor="two">2</label>

          <input
            type="radio"
            id="three"
            name="understanding"
            value="3"
            checked={this.state.understanding === '3'}
            onChange={this.onRadioChange}
          ></input>
          <label htmlFor="three">3</label>

          <input
            type="radio"
            id="four"
            name="understanding"
            value="4"
            checked={this.state.understanding === '4'}
            onChange={this.onRadioChange}
          ></input>
          <label htmlFor="four">4</label>

          <input
            type="radio"
            id="five"
            name="understanding"
            value="5"
            checked={this.state.understanding === '5'}
            onChange={this.onRadioChange}
          ></input>
          <label htmlFor="five">5</label>
          <div>
            <button onClick={this.onBackClick}>Back</button>
            <button>Next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(Understanding);
