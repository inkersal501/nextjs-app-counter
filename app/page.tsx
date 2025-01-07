"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount(count - 1);
  }
  return (
     <div className="text-center mt-10">
        <h1 className="text-4xl font-semibold">Counter : {count}</h1>
        <button onClick={handleIncrement} className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2 mt-5">Increment</button>
        <button onClick={handleDecrement} className="bg-red-500 text-white px-4 py-2 rounded-md mx-2">Decrement</button>
     </div>
  );
}
