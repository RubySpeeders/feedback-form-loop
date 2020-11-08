import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  state = {
    support: '',
  };

  onRadioChange = (event) => {
    this.setState({
      support: event.target.value,
    });
  };

  onNextClick = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'UPDATE_SUPPORT', payload: this.state });
    this.props.history.push('/comments');
  };

  onBackClick = (event) => {
    this.props.history.push('/understanding');
  };

  render() {
    return (
      <div>
        <p>How well are you being supported?</p>
        <form onSubmit={this.onNextClick}>
          <input
            required
            type="radio"
            id="one"
            name="support"
            value="1"
            checked={this.state.support === '1'}
            onChange={this.onRadioChange}
          ></input>
          <label htmlFor="one">1</label>

          <input
            type="radio"
            id="two"
            name="support"
            value="2"
            checked={this.state.support === '2'}
            onChange={this.onRadioChange}
          ></input>
          <label htmlFor="two">2</label>

          <input
            type="radio"
            id="three"
            name="support"
            value="3"
            checked={this.state.support === '3'}
            onChange={this.onRadioChange}
          ></input>
          <label htmlFor="three">3</label>

          <input
            type="radio"
            id="four"
            name="support"
            value="4"
            checked={this.state.support === '4'}
            onChange={this.onRadioChange}
          ></input>
          <label htmlFor="four">4</label>

          <input
            type="radio"
            id="five"
            name="support"
            value="5"
            checked={this.state.support === '5'}
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

export default connect()(Support);
