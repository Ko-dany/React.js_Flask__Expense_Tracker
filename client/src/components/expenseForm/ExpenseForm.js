import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const categoryHandler = (e) => {
    setEnteredCategory(e.target.value);
  };
  const amountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(
      `Data input => ${enteredCategory} / ${enteredAmount} / ${enteredDate}`
    );

    console.log(
      `Data types => ${typeof enteredCategory} / ${typeof enteredAmount} / ${typeof enteredDate}`
    );

    const url = "http://127.0.0.1:5000/post_expense";
    const data = { enteredCategory, enteredAmount, enteredDate };

    postData(url, data).then((response) => console.log(response));
    props.fetchData();
  };

  return (
    <form onSubmit={submitHandler} method="Post">
      <div className="expense_form_controls">
        <div className="expense_form_group">
          <label>Category</label>
          <input
            type="text"
            value={enteredCategory}
            onChange={categoryHandler}
          ></input>
        </div>
        <div className="expense_form_group">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandler}
          ></input>
        </div>
        <div className="expense_form_group">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateHandler}></input>
        </div>
      </div>
      <div className="expense_form_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
