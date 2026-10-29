import React from "react";
import Profile from "./Profile";

const userData = [
  { id: 1, name: "John", position: "Developer" },
  { id: 2, name: "Jane", position: "Designer" },
  { id: 3, name: "Bob", position: "Manager" },
];
function getUserId(id) {
  //   console.log(`User ID in Parent Component: ${id}`);
  const newUser = userData.find((user) => user.id === id);
  console.log(newUser);
}
function Users() {
  return (
    <div>
      {userData.map((user) => (
        <Profile {...user} getId={getUserId} key={user.id} />
      ))}
    </div>
  );
}

export default Users;
