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

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="50"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <span>Step : {count}</span>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      <div>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(0);
//   const date = new Date("jan 1 2021");
//   date.setDate(date.getDate() + count);

//   return (
//     <>
//       <div>
//         <button onClick={() => setStep((c) => c + 1)}> + </button>
//         <p>step : {step}</p>
//         <button onClick={() => setStep((c) => c - 1)}> - </button>
//       </div>

//       <div>
//         <button onClick={() => setCount((c) => c + step)}> + </button>
//         <p>Count : {count}</p>
//         <button onClick={() => setCount((c) => c - step)}> - </button>
//       </div>

//       <p>
//         <span>
//           {count === 0
//             ? "TOday is"
//             : count > 0
//             ? `${count} days from today is:`
//             : `${Math.abs(count)} days ago was}`}
//         </span>
//         <span>{date.toDateString()}</span>
//       </p>
//     </>
//   );
// }
