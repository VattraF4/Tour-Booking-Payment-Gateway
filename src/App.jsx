import { useEffect, useState } from "react";
import "./App.css";
import GitHubUser from "./components/GitHubUser";
import axios from "axios";

function App() {
  const url = "https://api.github.com/users"; // Replace with your API endpoint
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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
        setIsError(true);
        console.log(error.response.status);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <GitHubUser key={user.id} {...user} />
      ))}
    </div>
  );
}

export default App;
