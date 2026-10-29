import React from "react";
import Profile from "./Profile";

const userData = [
  { id: 1, name: "John", position: "Developer" },
  { id: 2, name: "Jane", position: "Designer" },
  { id: 3, name: "Bob", position: "Manager" },
];
function Users() {
  return (
    <div>
      {userData.map((user) => (
        <Profile {...user} key={user.id} />
      ))}
    </div>
  );
}

export default Users;
