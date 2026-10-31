import { useEffect } from "react";
import "./App.css";
import GitHubUser from "./components/GitHubUser";
import useFetchData from "./useFetchData";
import TourList from "./components/TourList";

function App() {
  const url = "https://api.github.com/users"; // Replace with your API endpoint

  const { data, isLoading, error } = useFetchData(url);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );
  }

  return (
    <>
      <TourList />

      {/* <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((user) => (
          <GitHubUser key={user.id} {...user} />
        ))}
      </div> */}
    </>
  );
}

export default App;
