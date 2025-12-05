import React from "react";
import "./App.css";

function Badge() {
  const name = "James Hope";
  const handle = "jameshope87";
  const img = "https://avatars.githubusercontent.com/u/11045736?v=4";
  return (
    <div className="badge my-6 mx-auto flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm-py-4 bg-gray-50 rounded-xl shadow-lg outline outline-black/5">
      <img
        src={img}
        alt={name}
        className="avatar mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
      />
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5 px-3">
          <p className="name text-lg font-semibold text-block">{name}</p>
          <p className="font-medium text-gray-400">Project Manager</p>
        </div>

          <a href={`https://github.com/${handle}`} className="handle font-medium rounded-lg py-2 px-3 text-gray-700 hover:bg-blue-200 hover:text-gray-900">github.com/{handle}</a>
      </div>
    </div>
  );
}

function Today() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1; // Months are zero-based
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  return (
    <div className="today">
      <p>Today&apos;s date is {currentDate}</p>
    </div>
  );
}

export default function App() {
  return (
    <React.Fragment>
      <Badge />
      <Today />
    </React.Fragment>
  );
}
