import React from "react";

function GitHubUser(users) {
  const { id, login, avatar_url, html_url } = users;
  return (
    <div>
      <article
        key={id}
        className="flex min-h-64 flex-col items-center justify-between rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl"
      >
        <img
          src={avatar_url}
          alt={`${login}'s avatar`}
          className="h-24 w-24 rounded-full bg-[#f6c857] object-cover ring-4 ring-blue-400/70 ring-offset-4 ring-offset-slate-900"
        />
        <span className="mt-4 text-xl font-bold text-white">{login}</span>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          View Profile
        </a>
      </article>
    </div>
  );
}

export default GitHubUser;
