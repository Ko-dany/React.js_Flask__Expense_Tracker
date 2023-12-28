import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/expense")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Hello, React!</h1>
      <div>
        {typeof data === "undefined" ? (
          <p>Loading...</p>
        ) : (
          data.map((expense) => (
            <p key={expense.id}>
              {expense.id}.{expense.category} - {expense.amount} (
              {expense.created_date})
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
