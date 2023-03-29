import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import User from "./components/User";

function App() {
  const [user, setUser] = useState(null);

  const userDetails = async () => {
    const response = await axios.get("https://randomuser.me/api/");
    setUser(response.data.results[0]);
  };

  useEffect(() => {
    userDetails();
  }, []);

  return (
    <div className="App">
      <div className="card">
        <div className="body">
          {user ? <User userData={user} /> : <p>Loading user data...</p>}
          <button onClick={userDetails}>Generate New Person</button>
        </div>
      </div>
    </div>
  );
}

export default App;
