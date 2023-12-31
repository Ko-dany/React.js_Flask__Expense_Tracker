import React from "react";
import { useEffect, useState } from "react";
import { format } from "date-fns";

function App() {
  const [data, setData] = useState([]);

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
        {data === undefined ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map((expense) => {
              const createdDate = new Date(expense.created_date);
              console.log(createdDate);
              return (
                <li key={expense.id}>
                  {expense.id}. {expense.category} - {expense.amount} (
                  {format(createdDate, "MMM/dd/yyyy")})
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
