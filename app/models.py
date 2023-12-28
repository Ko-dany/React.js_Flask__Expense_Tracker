from . import db

class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(200), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    created_date = db.Column(db.DateTime(), nullable=False)