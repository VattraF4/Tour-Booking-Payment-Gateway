import { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/Users";
import GitHubUser from "./components/GitHubUser";

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

  return (
    <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <GitHubUser key={user.id} {...user} />
      ))}
    </div>
  );
}

export default App;
