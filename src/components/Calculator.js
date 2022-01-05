import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="Calculator">
        <div id="resultsContainer">0</div>
        <div id="calculatorBody">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="altColor">÷</button>
          <button type="button" data-number={7}>7</button>
          <button type="button" data-number={8}>8</button>
          <button type="button" data-number={9}>9</button>
          <button type="button" className="altColor">×</button>
          <button type="button" data-number={4}>4</button>
          <button type="button" data-number={5}>5</button>
          <button type="button" data-number={6}>6</button>
          <button type="button" className="altColor">-</button>
          <button type="button" data-number={1}>1</button>
          <button type="button" data-number={2}>2</button>
          <button type="button" data-number={3}>3</button>
          <button type="button" className="altColor">+</button>
          <button type="button" className="gridSpanTwo" data-number={0}>0</button>
          <button type="button">.</button>
          <button type="button" className="altColor">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
