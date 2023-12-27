from . import db

class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String(200), nullable=False)
    expense = db.Column(db.Float, nullable=False)
    created_date = db.Column(db.DateTime(), nullable=False)