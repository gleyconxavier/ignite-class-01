import {useState} from "react";

export function Counter() {
  // Let's check the state concept on React with Hooks
  const [counter, setCounter] = useState(0);

  function Increment() {
    setCounter(counter + 1);
  }

  return (
          <div>
            <h2>{counter}</h2>
            <button type="button" onClick={Increment}>Click me to increment the value</button>
          </div>
  )
}
