import React, { useState } from 'react';
import './Calculator.css';

import calculate from '../logic/calculate';

function Calculator() {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = async (e) => {
    const response = await calculate(data, e.target.name);
    setData({
      total: response.total,
      next: response.next,
      operation: response.operation,
    });
  };

  const { total, next } = data;
  return (
    <div id="calculatorContainer">
      <div id="calculator">
        <div id="resultsContainer">{next || total || 0}</div>
        <div id="calculatorBody">
          <button type="button" onClick={handleClick} name="AC">AC</button>
          <button type="button" onClick={handleClick} name="+/-">+/-</button>
          <button type="button" onClick={handleClick} name="%">%</button>
          <button type="button" className="altColor" onClick={handleClick} name="÷">÷</button>
          <button type="button" name={7} onClick={handleClick}>7</button>
          <button type="button" name={8} onClick={handleClick}>8</button>
          <button type="button" name={9} onClick={handleClick}>9</button>
          <button type="button" className="altColor" onClick={handleClick} name="x">x</button>
          <button type="button" name={4} onClick={handleClick}>4</button>
          <button type="button" name={5} onClick={handleClick}>5</button>
          <button type="button" name={6} onClick={handleClick}>6</button>
          <button type="button" className="altColor" onClick={handleClick} name="-">-</button>
          <button type="button" name={1} onClick={handleClick}>1</button>
          <button type="button" name={2} onClick={handleClick}>2</button>
          <button type="button" name={3} onClick={handleClick}>3</button>
          <button type="button" className="altColor" onClick={handleClick} name="+">+</button>
          <button type="button" className="gridSpanTwo" name={0} onClick={handleClick}>0</button>
          <button type="button" onClick={handleClick} name=".">.</button>
          <button type="button" className="altColor" onClick={handleClick} name="=">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
