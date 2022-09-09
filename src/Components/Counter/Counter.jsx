import React, { useState } from "react";
import "./Counter.scss";

//Build one counter using state and pass to App.jsx

const Counter = () => {
const [counter, setCounter] = useState(0);

  const incrementCount = () => {
    setCounter(counter + 1);
  };
  const decrementCount = () => {
    if (counter === 0) {
        counter = 0;
    } else {
        setCounter(counter - 1);
    }
    
  };


  return (
        <div className="counterCard">

              <p className="counterCard__heading">Customer</p>

            <div className="counterCard__counter">

              <div onClick={decrementCount}>
               <button className="counterCard__counter--calculate">-</button>
              </div>

              <span className="counterCard__counter--number">{counter}</span>

              <div onClick={incrementCount}>
                <button className="counterCard__counter--calculate">+</button>
              </div>

            
            </div>
        </div>
  );
};

export default Counter;