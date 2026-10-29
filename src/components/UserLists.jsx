import React, { useState } from "react";
import Users from "./Users";
import people from "../assets/data";

console.log(people);
function UserLists() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2b2f32] p-4">
      <div className="w-full max-w-md bg-[#535353] p-6 rounded-2xl shadow-lg">
        {people.map((person) => (
          <Users {...person} key={person.id} />
        ))}
        <button className="w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-3 rounded-lg font-medium text-lg mt-2 transition-colors">
          Clear All
        </button>
      </div>
    </div>
  );
}

export default UserLists;
