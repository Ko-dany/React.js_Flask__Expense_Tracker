import React from "react";
import { useEffect, useState } from "react";
import { format } from "date-fns";

import ExpenseForm from "./components/expenseForm/ExpenseForm";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/get_expense")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Hello, React!</h1>
      <ExpenseForm />

      {/* Below should be componentized */}
      <div>
        {data === undefined ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map((expense) => {
              const createdDate = new Date(expense.created_date);
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
