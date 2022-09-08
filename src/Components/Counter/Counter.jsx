import React, { useState } from "react";
import "./Counter.scss";

//Build one counter using state and pass to App.jsx

const Counter = () => {
const [counter, setCounter] = useState(0);

  const incrementCount = () => {
    setCounter(counter + 1);
  };
  const decrementCount = () => {
    setCounter(counter - 1);
  };


  return (
    <div className="counter">

        <div onClick={decrementCount}>
          <button className="counter__calculate">-</button>
        </div>

        <span className="counter__number">{counter}</span>

        <div onClick={incrementCount}>
          <button className="counter__calculate">+</button>
        </div>

    </div>
  );
};

export default Counter;