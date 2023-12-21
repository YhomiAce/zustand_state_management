import React from "react";
import { useCounterStore } from "../store/counter";

const Counter = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementByAmount = useCounterStore((state) => state.incrementByAmount);
  const decrementByAmount = useCounterStore((state) => state.decrementByAmount);
  return (
    <div>
      <h1 className="text-center text-white p-4 m-4 bg-gray-900 text-3xl">
        {count}
      </h1>
      <div className="flex flex-row justify-around">
        <button
          className="text-3xl bg-gray-400 text-white p-4 text-center m-3 rounded"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="text-3xl text-center-400 bg-gray-800 p-4 text-white m-3 rounded"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="text-3xl bg-gray-400 text-white p-4 text-center m-3 rounded"
          onClick={() => incrementByAmount(10)}
        >
          Increment By 10
        </button>
        <button
          className="text-3xl text-center-400 bg-gray-800 p-4 text-white m-3 rounded"
          onClick={() => decrementByAmount(10)}
        >
          Decrement By 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
