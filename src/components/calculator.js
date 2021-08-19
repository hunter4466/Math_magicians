import React, { useState } from 'react';
import calculate from '../logic/calculate';
import updateObject from '../logic/parseUpdate';
// eslint-disable-next-line react/prefer-stateless-function

const Calculator = () => {
  const [nextRes, setNext] = useState(null);
  const [operationRes, setOperation] = useState(null);
  const [totalRes, setTotal] = useState(null);

  const updateState = (object) => {
    setNext(object.next);
    setOperation(object.operation);
    setTotal(object.total);
  };

  const handleClick = (buttonName) => {
    const actObj = {
      next: nextRes,
      operation: operationRes,
      total: totalRes,
    };
    const updatedObject = updateObject(actObj, calculate(actObj, buttonName));
    updateState(updatedObject);
  };
  return (
    <div className="calc_main_container">
      <h1 className="calc_title_text">Let&apos;s do some math!</h1>
      <div className="calc_container">
        <div className="result">
          <p data-testid="display">
            {totalRes}
            {' '}
            {operationRes}
            {' '}
            {nextRes}
          </p>
        </div>
        <div className="calc-buttons">
          <div className="left-btns-container">
            <button
              type="button"
              onClick={() => {
                handleClick('AC');
              }}
              className="left-btn"
            >
              AC
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('+/-');
              }}
              className="left-btn"
            >
              +/-
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('%');
              }}
              className="left-btn"
            >
              %
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('7');
              }}
              className="left-btn"
            >
              7
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('8');
              }}
              className="left-btn"
            >
              8
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('9');
              }}
              className="left-btn"
            >
              9
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('4');
              }}
              className="left-btn"
            >
              4
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('5');
              }}
              className="left-btn"
            >
              5
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('6');
              }}
              className="left-btn"
            >
              6
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('1');
              }}
              className="left-btn"
            >
              1
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('2');
              }}
              className="left-btn"
            >
              2
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('3');
              }}
              className="left-btn"
            >
              3
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('0');
              }}
              className="left-btn-cero"
            >
              0
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('.');
              }}
              className="left-btn"
            >
              .
            </button>
          </div>
          <div className="right-btns-container">
            <button
              type="button"
              onClick={() => {
                handleClick('÷');
              }}
              className="right-btn"
            >
              ÷
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('x');
              }}
              className="right-btn"
            >
              x
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('-');
              }}
              className="right-btn"
            >
              -
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('+');
              }}
              className="right-btn"
            >
              +
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('=');
              }}
              className="right-btn"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
