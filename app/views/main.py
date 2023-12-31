from flask import Blueprint, jsonify

from app.models import Expense

bp = Blueprint('main', __name__, url_prefix='/')

@bp.route('/')
def index():
    return "Hello from Flask!"

@bp.route('/expense')
def users():
    expenses = Expense.query.all()

    # Create the list using list comprehension
    expense_list = [
        {"id":expense.id,
         "category":expense.category,
         "amount": expense.amount,
         "created_date":expense.created_date} for expense in expenses
    ]
    return jsonify(expense_list)