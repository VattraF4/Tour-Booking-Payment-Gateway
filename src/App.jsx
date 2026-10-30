import { useRef, useState } from "react";
import "./App.css";
import MemberListCard from "./components/MemberListCard";

function App() {
  const [text, setText] = useState("");

  // Only sets .current to 0 on the very FIRST render.
  // On render 2, 3, 4..., React ignores the `0` and gives back the existing ref.
  const clicks = useRef(0);

  const handleClick = () => {
    clicks.current += 1;
    console.log(clicks.current);
  };

  return (
    <div className="container mx-auto flex min-h-40 max-w-md flex-col items-center justify-center gap-4 rounded-2xl bg-amber-50 p-6 shadow-lg">
      {/* Typing here triggers a re-render every letter */}
      <input
        className="w-full rounded-lg border border-amber-50-200 bg-white px-4 py-2 text-gray-800 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      {/* Clicking does NOT trigger a render, but increments the ref */}
      <button
        className="rounded-lg bg-amber-500 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 active:scale-95"
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
