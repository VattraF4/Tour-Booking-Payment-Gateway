import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  function increment() {
    setCount(count + 1);
  }
  useEffect(() => {
    document.title = count;
    console.log("useEffect");
  }, []); // [] array dependencies vazia significa que o efeito só será executado uma vez, após a montagem do componente
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl ring-1 ring-slate-200">
        <h1 className="mb-6 text-3xl font-bold text-slate-800">Counter</h1>

        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-indigo-50 p-4">
            <p className="text-sm font-medium text-indigo-600">Count</p>
            <h3 className="mt-1 text-3xl font-bold text-indigo-900">{count}</h3>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-500">Value</p>
            <h3 className="mt-1 truncate text-xl font-bold text-slate-800">
              {value || "—"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            value={value}
            type="text"
            placeholder="Enter a value"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            onClick={increment}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
