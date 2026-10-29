import { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/Users";

function App() {
  const url = "https://api.github.com/users"; // Replace with your API endpoint
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // After fetching the data, parse it as JSON and update the state
        const data = await response.json();
        // Update the state with the fetched data
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(users); // Log the fetched users to the console

  return (
    <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {users.map(({ id, login, avatar_url, html_url }) => (
        <article
          key={id}
          className="flex min-h-64 flex-col items-center justify-between rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl"
        >
          <img
            src={avatar_url}
            alt={`${login}'s avatar`}
            className="h-24 w-24 rounded-full bg-[#f6c857] object-cover ring-4 ring-blue-400/70 ring-offset-4 ring-offset-slate-900"
          />
          <span className="mt-4 text-xl font-bold text-white">{login}</span>
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            View Profile
          </a>
        </article>
      ))}
    </div>
  );
}

export default App;
