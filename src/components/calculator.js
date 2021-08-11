import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calc_container">
        <div className="result"><p>0</p></div>
        <div className="calc-buttons">
          <div className="left-btn-container">
            <button type="button" className="left-btn">AC</button>
            <button type="button" className="left-btn">+/-</button>
            <button type="button" className="left-btn">%</button>
            <button type="button" className="left-btn">7</button>
            <button type="button" className="left-btn">8</button>
            <button type="button" className="left-btn">9</button>
            <button type="button" className="left-btn">4</button>
            <button type="button" className="left-btn">5</button>
            <button type="button" className="left-btn">6</button>
            <button type="button" className="left-btn">1</button>
            <button type="button" className="left-btn">2</button>
            <button type="button" className="left-btn">3</button>
            <button type="button" className="left-btn-cero">0</button>
            <button type="button" className="left-btn">.</button>
          </div>
          <div className="right-btns-container">
            <button type="button" className="right-btn">+</button>
            <button type="button" className="right-btn">x</button>
            <button type="button" className="right-btn">-</button>
            <button type="button" className="right-btn">+</button>
            <button type="button" className="right-btn">=</button>
          </div>
        </div>
      </div>
    );
  }
}
