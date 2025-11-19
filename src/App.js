import React from 'react';
import './App.css';

function Badge() {
  const name = 'James Hope';
  const handle = 'jameshope87';
  const img = 'https://avatars.githubusercontent.com/u/11045736?v=4';
  return (
    <div className="badge">
      <img alt={name} src={img} />
      <div>
        <h4>{name}</h4>
        <p>github.com/{handle}</p>
      </div>
    </div>
  );
}
function Today() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  return <p>Today is {currentDate}</p>;
}

export default function App() {
  return (
    <React.Fragment>
      <Today />
      <Badge />
    </React.Fragment>
  );
}
