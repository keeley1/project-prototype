import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [backendData, setBackendData] = useState({ users: [] });
  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      <h1>Harmony</h1>
      <h3>Log in</h3>
      <p><b>Users</b></p>
      {(typeof backendData.users === 'undefined') ? (
        <P>Loading...</P>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  );
}

export default App;
