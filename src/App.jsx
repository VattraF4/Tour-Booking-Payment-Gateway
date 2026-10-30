import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [members, setMembers] = useState([
    { id: 1, name: "Ra Vattra", email: "ra.vattra@example.com" },
    { id: 2, name: "John Doe", email: "john.doe@example.com" },
    { id: 3, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 4, name: "Alice Johnson", email: "alice.johnson@example.com" },
    { id: 5, name: "Bob Brown", email: "bob.brown@example.com" },
    { id: 6, name: "Ra Vattra", email: "ra.vattra@example.com" },
    { id: 7, name: "John Doe", email: "john.doe@example.com" },
    { id: 8, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 9, name: "Alice Johnson", email: "alice.johnson@example.com" },
    { id: 10, name: "Bob Brown", email: "bob.brown@example.com" },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in both name and email fields.");
      return;
    }
    const id = Date.now();
    const newMember = { id, name, email };
    setMembers([newMember, ...members]);
    setName("");
    setEmail("");
  }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center gap-4 p-4 sm:p-6">
      <div className="w-full max-w-md max-h-72 overflow-y-auto bg-white rounded-lg p-4 sm:p-6 shadow-lg">
        <h3 className="text-lg font-medium text-gray-800">Members Display</h3>
        <ul className="mt-2 space-y-1">
          {members.map((member) => (
            <li
              key={member.id}
              className="grid grid-cols-1 items-center gap-x-4 gap-y-1 rounded-lg p-2 text-sm text-gray-600 hover:bg-gray-100 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_auto]"
            >
              <h3 className="min-w-0 font-medium text-gray-800">
                {member.name}
              </h3>
              <h3 className="min-w-0 break-all">{member.email}</h3>
              <button
                onClick={() =>
                  setMembers(members.filter((m) => m.id !== member.id))
                }
                className="justify-self-start text-sm text-red-500 hover:text-red-700 sm:justify-self-end"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <form className="w-full max-w-md bg-white rounded-lg p-4 sm:p-6 shadow-lg space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Login</h2>

        <div>
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
          />
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
