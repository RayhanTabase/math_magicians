import React from 'react';
import './Calculator.css';

import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = async (e) => {
    const response = await calculate(this.state, e.target.name);
    this.setState(() => ({
      total: response.total,
      next: response.next,
      operation: response.operation,
    }));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div id="Calculator">
        <div id="resultsContainer">{next || total || 0}</div>
        <div id="calculatorBody">
          <button type="button" onClick={this.handleClick} name="AC">AC</button>
          <button type="button" onClick={this.handleClick} name="+/-">+/-</button>
          <button type="button" onClick={this.handleClick} name="%">%</button>
          <button type="button" className="altColor" onClick={this.handleClick} name="÷">÷</button>
          <button type="button" name={7} onClick={this.handleClick}>7</button>
          <button type="button" name={8} onClick={this.handleClick}>8</button>
          <button type="button" name={9} onClick={this.handleClick}>9</button>
          <button type="button" className="altColor" onClick={this.handleClick} name="×">×</button>
          <button type="button" name={4} onClick={this.handleClick}>4</button>
          <button type="button" name={5} onClick={this.handleClick}>5</button>
          <button type="button" name={6} onClick={this.handleClick}>6</button>
          <button type="button" className="altColor" onClick={this.handleClick} name="-">-</button>
          <button type="button" name={1} onClick={this.handleClick}>1</button>
          <button type="button" name={2} onClick={this.handleClick}>2</button>
          <button type="button" name={3} onClick={this.handleClick}>3</button>
          <button type="button" className="altColor" onClick={this.handleClick} name="+">+</button>
          <button type="button" className="gridSpanTwo" name={0} onClick={this.handleClick}>0</button>
          <button type="button" onClick={this.handleClick} name=".">.</button>
          <button type="button" className="altColor" onClick={this.handleClick} name="=">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
