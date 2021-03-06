import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Feeling extends Component {
  state = {
    feeling: '',
  };

  //chooses number of radio selection
  onRadioChange = (event) => {
    this.setState({
      feeling: event.target.value,
    });
  };

  //dispatches the feeling radio selection to reducer, goes to next page
  onNextClick = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'UPDATE_FEEDBACK', payload: this.state });
    this.props.history.push('/understanding');
  };

  render() {
    return (
      <div>
        <p>How are you feeling today?</p>
        <form onSubmit={this.onNextClick}>
          <input
            required
            type="radio"
            id="one"
            name="feeling"
            value="1"
            checked={this.state.feeling === '1'}
            onChange={this.onRadioChange}
          ></input>
          <label htmlFor="one">1</label>

          <input
            type="radio"
            id="two"
            name="feeling"
            value="2"
            checked={this.state.feeling === '2'}
            onChange={this.onRadioChange}
          ></input>
          <label htmlFor="two">2</label>

          <input
            type="radio"
            id="three"
            name="feeling"
            value="3"
            checked={this.state.feeling === '3'}
            onChange={this.onRadioChange}
          ></input>
          <label htmlFor="three">3</label>

          <input
            type="radio"
            id="four"
            name="feeling"
            value="4"
            checked={this.state.feeling === '4'}
            onChange={this.onRadioChange}
          ></input>
          <label htmlFor="four">4</label>

          <input
            type="radio"
            id="five"
            name="feeling"
            value="5"
            checked={this.state.feeling === '5'}
            onChange={this.onRadioChange}
          ></input>
          <label htmlFor="five">5</label>
          <div>
            <Button variant="contained" color="primary" type="submit">
              Next
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(Feeling);
