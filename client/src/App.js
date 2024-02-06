import React from "react";
import { useEffect, useState } from "react";

import "./App.css";
import Card from "./components/Wrapper/Card";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseItem from "./components/ExpenseItem/expenseItem";

function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch("/get_expense")
      .then((res) => res.json())
      .then((data) => {
        // const sortedData = data.sort(
        //   (a, b) => new Date(a.created_date) - new Date(b.created_date)
        // );
        setData(data);
        console.log("Initial Data");
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="expense-tracker-header">Expense Tracker</h1>
      <ExpenseForm fetchData={fetchData} />
      <Card className="expenses">
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
      </Card>
    </div>
  );
}

export default App;
