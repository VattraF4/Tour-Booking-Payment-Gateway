import "./App.css";
import TourList from "./components/TourList";

function App() {
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
