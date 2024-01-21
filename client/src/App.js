import React from "react";
import { useEffect, useState } from "react";

import ExpenseForm from "./components/expenseForm/ExpenseForm";
import ExpenseItem from "./components/expenseItems/ExpenseItem";

function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch("/get_expense")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="expense_tracker_header">Expense Tracker</h1>
      <ExpenseForm fetchData={fetchData} />
      <div>
        {data === undefined ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map((expense) => {
              const createdDate = new Date(expense.created_date);
              createdDate.setDate(createdDate.getDate() + 1);

              return (
                <li key={expense.id}>
                  <ExpenseItem
                    id={expense.id}
                    category={expense.category}
                    amount={expense.amount}
                    createdDate={createdDate}
                  />
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
