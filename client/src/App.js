import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Hello, React!</h1>
      <div>
        {typeof data.users === "undefined" ? (
          <p>Loading...</p>
        ) : (
          data.users.map((user) => (
            <p key={user.id}>
              {user.id}.{user.name}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
