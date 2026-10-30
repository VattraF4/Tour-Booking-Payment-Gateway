import React from "react";

function MemberListCard(props) {
  const members = props.members;
  return (
    <>
      <div className="w-full max-w-md max-h-72 overflow-y-auto bg-white rounded-lg p-4 sm:p-6 shadow-lg">
        <h3 className="text-lg font-medium text-gray-800">Members Display</h3>
        <ul className="mt-2 space-y-1">
          { members.map((member) => (
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
                    props.removeMember(member.id)
                }
                className="justify-self-start text-sm text-red-500 hover:text-red-700 sm:justify-self-end"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MemberListCard;
