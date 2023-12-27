from flask import Blueprint

bp = Blueprint('main', __name__, url_prefix='/')

@bp.route('/')
def index():
    return "Hello, World!"

@bp.route('/hello')
def hello():
    return "Hi, Dany!"