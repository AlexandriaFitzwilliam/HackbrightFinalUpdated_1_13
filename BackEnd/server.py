"""Server for movie ratings app."""

from flask import (Flask, render_template, request, flash, session,
                   redirect, jsonify)
from model import db ,connect_to_db, Rating, User
import crud
from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined


@app.route('/')
def homepage():
    """View homepage."""

    return render_template('base.html')


@app.route('/api/<username>')
def get_user(username):

    user = crud.get_user_by_username(username)

    return jsonify(user)


@app.route('/api/book/<book_id>')
def get_one_book_by_id(book_id):

    book = crud.get_book_by_id(book_id)

    return jsonify(book.to_dict())


@app.route('/api/view_all/<int:shelf_id>')
def get_all_books_in_shelf(shelf_id):
    
    all_books = crud.get_books_by_shelf_id(shelf_id)
    all_books_dic = {}

    for book in all_books:
        all_books_dic[book.book_id] = book.to_dict()

    return jsonify(all_books_dic)


@app.route('/api/book_ratings/<int:book_id>')
def get_all_ratings_for_book(book_id):

    all_ratings = Rating.get_by_book_id(book_id)
    all_ratings_dict = {}

    for rating in all_ratings:
        all_ratings_dict[rating.rating_id] = rating.to_dict()

    return jsonify(all_ratings_dict)


@app.route('/api/all_users')
def get_all_users():

    all_users = User.get_all()
    all_users_dict = {}

    for user in all_users:
        all_users_dict[user.user_id] = user.to_dict()

    return jsonify(all_users_dict)


@app.route('/api/user_ratings/<int:user_id>')
def get_all_ratings_for_user(user_id):

    all_ratings = Rating.get_by_user_id(user_id)
    all_ratings_dict = {}

    for rating in all_ratings:
        all_ratings_dict[rating.rating_id] = rating.to_dict()

    return jsonify(all_ratings_dict)


if __name__ == "__main__":
    # with app.app_context():

    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)
