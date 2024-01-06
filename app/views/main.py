from flask import Blueprint, jsonify, request, redirect
from datetime import datetime
import json

from app import db
from app.models import Expense

bp = Blueprint('main', __name__, url_prefix='/')

@bp.route('/')
def index():
    return "Hello from Flask!"

@bp.route('/get_expense')
def get_expense():
    print("GET");

    expenses = Expense.query.all()

    # Create the list using list comprehension
    expense_list = [
        {"id":expense.id,
         "category":expense.category,
         "amount": expense.amount,
         "created_date":expense.created_date} for expense in expenses
    ]
    return jsonify(expense_list)

@bp.route('/post_expense', methods=["POST"])
def post_expense():
    print("POST");

    try:
        print("POST TRY is executed!")

        data = request.get_data()

        # Decode the data from bytes to dictionary data type
        encoded_data = json.loads(data.decode("utf8"))

        print(f"DATA: {encoded_data}")
        print(type(encoded_data))

        category = encoded_data["enteredCategory"]
        print(f"{type(category)}")

        amount = float(encoded_data["enteredAmount"])
        print(f"{type(amount)}")

        date = datetime.strptime(encoded_data["enteredDate"], '%Y-%m-%d')
        print(f"{type(date)}")

        new_expense = Expense(category=category,amount=amount,created_date=date) 
        print(f"NEW EXPENSE CREATED")

        db.session.add(new_expense)
        db.session.commit()

        print("POST TRY is successfully executed!")
        return redirect("get_expense")
    
    except Exception as e:
        return jsonify({"error":str(e)})