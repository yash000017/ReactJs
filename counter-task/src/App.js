import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(0);

  return (
    <div>
      <h1>Counter</h1>

      <div className="main">
        <input
          type="number"
          placeholder="Enter count value"
          value={val}
          onChange={(e) => setVal(+e.target.value)}
        />
        <button onClick={() => setCount(val)}>Set Count</button>
        <button
          onClick={() => {
            setCount((c) => c + 1);
            setVal(count + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCount((c) => c - 1);
            setVal(count - 1);
          }}
        >
          -
        </button>
      </div>

      <p>Count : {count}</p>
    </div>
  );
}
