import React, { useState } from "react";
import { format } from "date-fns";

function ExpenseItem(props) {
  return (
    <div>
      <div>
        {props.id}. {props.category} - {props.amount} (
        {format(props.createdDate, "MMM/dd/yyyy")})
      </div>
      <div>
        <a href={`/edit/${props.id}`} rel="noopener noreferrer">
          Modify
        </a>
        <a href="/delete" rel="noopener noreferrer">
          Delete
        </a>
      </div>
    </div>
  );
}

export default ExpenseItem;
