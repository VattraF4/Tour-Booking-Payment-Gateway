import { useEffect, useState } from "react";
import "./App.css";
import GitHubUser from "./components/GitHubUser";
import axios from "axios";

function App() {
  const url = "https://api.github.com/users"; // Replace with your API endpoint
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   // Fetch data from the API
      //   const response = await fetch(url);
      //   if (!response.ok) {
      //     throw new Error(response.status);
      //   }
      //   // After fetching the data, parse it as JSON and update the state
      //   const data = await response.json();
      //   // Update the state with the fetched data
      //   setUsers(data);
      // } catch (error) {
      //   console.error("Error fetching data:", error);
      // }
      try {
        const response = await axios.get(url);
        setUsers(response.data);
      } catch (error) {
        console.log(error.response.status);
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
