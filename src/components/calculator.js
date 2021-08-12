import React, { useState } from 'react';
import calculate from '../logic/calculate';
import updateObject from '../logic/parseUpdate';
// eslint-disable-next-line react/prefer-stateless-function

export default const Calculator = () => {

  handleClick = (buttonName) => {
    const destr = this.state;
    const updatedObject = updateObject(destr, calculate(destr, buttonName));
    this.setNext;
  }

  render() {
    const [next, setNext] = useState(null)
    const [operation, setOperation] = useState(null)
    const [total, setTotal] = useState(null)
    return (
      <div className="calc_container">
        <div className="result">
          <p>
            {nowState.total}
            {' '}
            {nowState.operation}
            {' '}
            {nowState.next}
          </p>
        </div>
        <div className="calc-buttons">
          <div className="left-btns-container">
            <button type="button" onClick={() => { this.handleClick('AC'); }} className="left-btn">AC</button>
            <button type="button" onClick={() => { this.handleClick('+/-'); }} className="left-btn">+/-</button>
            <button type="button" onClick={() => { this.handleClick('%'); }} className="left-btn">%</button>
            <button type="button" onClick={() => { this.handleClick('7'); }} className="left-btn">7</button>
            <button type="button" onClick={() => { this.handleClick('8'); }} className="left-btn">8</button>
            <button type="button" onClick={() => { this.handleClick('9'); }} className="left-btn">9</button>
            <button type="button" onClick={() => { this.handleClick('4'); }} className="left-btn">4</button>
            <button type="button" onClick={() => { this.handleClick('5'); }} className="left-btn">5</button>
            <button type="button" onClick={() => { this.handleClick('6'); }} className="left-btn">6</button>
            <button type="button" onClick={() => { this.handleClick('1'); }} className="left-btn">1</button>
            <button type="button" onClick={() => { this.handleClick('2'); }} className="left-btn">2</button>
            <button type="button" onClick={() => { this.handleClick('3'); }} className="left-btn">3</button>
            <button type="button" onClick={() => { this.handleClick('0'); }} className="left-btn-cero">0</button>
            <button type="button" onClick={() => { this.handleClick('.'); }} className="left-btn">.</button>
          </div>
          <div className="right-btns-container">
            <button type="button" onClick={() => { this.handleClick('÷'); }} className="right-btn">÷</button>
            <button type="button" onClick={() => { this.handleClick('x'); }} className="right-btn">x</button>
            <button type="button" onClick={() => { this.handleClick('-'); }} className="right-btn">-</button>
            <button type="button" onClick={() => { this.handleClick('+'); }} className="right-btn">+</button>
            <button type="button" onClick={() => { this.handleClick('='); }} className="right-btn">=</button>
          </div>
        </div>
      </div>
    );
  }
}
