import React, { useState } from "react";
import { format } from "date-fns";
import moment from "moment";

import "./ExpenseItem.css";
import Card from "../Wrapper/Card";

function ExpenseItem(props) {
  const createdDate = new Date(props.createdDate);
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
          <a
            className="expense-item__action"
            href={`/edit/${props.id}`}
            rel="noopener noreferrer"
          >
            Modify
          </a>
          <a
            className="expense-item__action"
            href="/delete"
            rel="noopener noreferrer"
          >
            Delete
          </a>
        </div>
      </Card>
    </div>
  );
}

export default ExpenseItem;
