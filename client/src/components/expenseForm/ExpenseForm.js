import React, { useState, useEffect } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const intialValues = { category: "", amount: "", date: "" };
  //'0001-01-01'
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // use the variable "name" by wrapping the "name" with []
  };

  const validateForm = (values) => {
    let errors = {};
    const today = new Date();
    const selectedDateString = values.date;
    const selectedDate = new Date(selectedDateString);

    // Category must be at least 2 characters long
    // Amount must be numeric value (limit?)
    // Date must be between 2000 year today + 1

    if (values.category.length < 2) {
      errors.category = "Category must be at least 2 characters long.";
      console.log("Category is not valid");
    }

    if (values.amount <= 0) {
      errors.amount = "Amount must be more than zero.";
      console.log("Amount is not valid");
    }

    if (selectedDate > today) {
      errors.date = "Date cannot be greater than today.";
      console.log("Date is not valid");
    }

    return errors;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    console.log(formValues);
    setIsSubmitted(true);
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

  const submitForm = () => {
    const url = "http://127.0.0.1:5000/post_expense";
    const data = {
      enteredCategory: formValues.category,
      enteredAmount: formValues.amount,
      enteredDate: formValues.date,
    };

    console.log(data);

    postData(url, data).then((response) => console.log(response));
    props.fetchData();
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      submitForm();
    } else {
      console.log(formErrors);
    }
  }, [formErrors]);

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler} method="Post">
        <div className="expense_form_controls">
          <div className="expense_form_group">
            <label>Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formValues.category}
              onChange={onChangeHandler}
            ></input>
          </div>
          <div className="expense_form_group">
            <label>Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              min="0.01"
              step="0.01"
              value={formValues.amount}
              onChange={onChangeHandler}
            ></input>
          </div>
          <div className="expense_form_group">
            <label>Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formValues.date}
              onChange={onChangeHandler}
            ></input>
          </div>
        </div>
        <div className="expense_form_action">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
