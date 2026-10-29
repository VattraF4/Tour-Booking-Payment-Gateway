import React from "react";

function Users(props) {
  const { name, age, profile, } = props;
  return (
    <article className="flex items-center justify-between bg-[#3f3f3f] p-3 rounded-lg mb-4 transition duration-200 hover:-translate-y-0.5 hover:bg-[#4a4a4a] hover:shadow-lg">
      <div className="flex items-center gap-4">
        <img
          src={profile}
          alt={`${name}'s avatar`}
          className="w-14 h-14 rounded-full bg-[#f6c857] object-cover"
        />
        <span className="text-white text-[20px] font-semibold">
          {name} Age : {age}
        </span>
      </div>
      <button
        className="bg-[#b01b1b] hover:bg-[#901616] text-white px-4 py-2 rounded-md font-medium transition-colors"
      >
        Remove
      </button>
    </article>
  );
}

export default Users;
