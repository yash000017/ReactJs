// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState, useEffect } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [formCur, setFormCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [conveted, setConveted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${formCur}&to=${toCur}`
        );
        const data = await res.json();
        setIsLoading(false);
        setConveted(data.rates[toCur]);
      }
      if (formCur === toCur) return setConveted(amount);
      convert();
    },
    [amount, formCur, toCur]
  );
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={formCur}
        onChange={(e) => setFormCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCur}
        disabled={isLoading}
        onChange={(e) => setToCur(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {conveted} {toCur}
      </p>
    </div>
  );
}
