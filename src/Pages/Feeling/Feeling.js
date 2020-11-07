import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  state = {
    feeling: '',
  };

  onRadioChange = (event) => {
    this.setState(
      {
        feeling: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onNextClick = (event) => {
    event.preventDefault();
    this.props.history.push('/understanding');
  };
  render() {
    return (
      <div>
        <p>How are you feeling today?</p>
        <form onSubmit={this.onNextClick}>
          <input
            type="radio"
            id="one"
            name="feeling"
            value="1"
            checked={this.state.feeling === '1'}
            onChange={this.onRadioChange}
          ></input>
          <label for="one">1</label>

          <input
            type="radio"
            id="two"
            name="feeling"
            value="2"
            checked={this.state.feeling === '2'}
            onChange={this.onRadioChange}
          ></input>
          <label for="two">2</label>

          <input
            type="radio"
            id="three"
            name="feeling"
            value="3"
            checked={this.state.feeling === '3'}
            onChange={this.onRadioChange}
          ></input>
          <label for="three">3</label>

          <input
            type="radio"
            id="four"
            name="feeling"
            value="4"
            checked={this.state.feeling === '4'}
            onChange={this.onRadioChange}
          ></input>
          <label for="four">4</label>

          <input
            type="radio"
            id="five"
            name="feeling"
            value="5"
            checked={this.state.feeling === '5'}
            onChange={this.onRadioChange}
          ></input>
          <label for="five">5</label>
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(Feeling);
