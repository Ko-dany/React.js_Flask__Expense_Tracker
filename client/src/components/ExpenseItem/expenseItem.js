import React from "react";
//import React, { useState } from "react";
import { format } from "date-fns";
import moment from "moment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./ExpenseItem.css";
import Card from "../Wrapper/Card";

function ExpenseItem(props) {
  const createdDate = new Date(props.createdDate);

  async function postOptionData(url = "", data = "") {
    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  const selectOptions = () => {
    // const url = `http://127.0.0.1:5000//edit/${id}`;
  };

  return (
    <div>
      <Card className="expense-item">
        <div className="expense-date">
          <div className="expense-date__month">
            {format(props.createdDate, "MMMM")}
          </div>
          <div className="expense-date__year">
            {moment(createdDate).format("YYYY")}
            {/* {format(createdDate, "yyyy")} */}
          </div>
          <div className="expense-date__day">
            {format(props.createdDate, "dd")}
          </div>
        </div>
        <div className="expense-item__description">
          <h2>{props.category}</h2>
          <div className="expense-item__price">
            <div>${props.amount}</div>
          </div>
        </div>
        <div>
          {/* <form>
            <button type="submit" name="edit">
              Edit
            </button>
          </form>
          <form>
            <button type="submit" name="delete">
              Delete
            </button>
          </form> */}
        </div>
      </Card>
    </div>
  );
}

export default ExpenseItem;
