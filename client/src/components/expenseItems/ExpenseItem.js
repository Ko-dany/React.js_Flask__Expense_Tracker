import React, { useState } from "react";
import { format } from "date-fns";

function ExpenseItem(props) {
  return (
    <li key={props.keys}>
      <div>
        {props.keys}. {props.category} - {props.amount} (
        {format(props.createdDate, "MMM/dd/yyyy")})
      </div>
      <div>
        <a href="#" rel="noopener noreferrer">
          Modify
        </a>
        <a href="#" rel="noopener noreferrer">
          Delete
        </a>
      </div>
    </li>
  );
}

export default ExpenseItem;
