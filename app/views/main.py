from flask import Blueprint, render_template

from app.models import Expense

bp = Blueprint('main', __name__, url_prefix='/')


@bp.route('/')
def index():
    return "Hello from Flask!"


@bp.route('/users')
def users():
    expenses = Expense.query.order_by(Expense.created_date.desc());
    return {
        "users":[
            {"id":1, "name": "Dany"},
            {"id":2, "name": "Gabe"}
        ]
    }