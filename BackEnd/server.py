"""Server for movie ratings app."""

from flask import (Flask, render_template, request, flash, session,
                   redirect, jsonify)
from model import db ,connect_to_db
import crud
from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined


@app.route('/')
def homepage():
    """View homepage."""

    return render_template('base.html')


@app.route("/user/<user_id>")
def show_user(user_id):
    """Shows the User's shelves"""

    user = crud.get_user_by_id(user_id)

    return render_template("user_page.html", user=user)


@app.route("/user/reviews/<user_id>")
def show_user_ratings(user_id):
    """Shows the User's ratings"""

    user = crud.get_user_by_id(user_id)

    return render_template("user_reviews.html", user=user)


@app.route("/book/<book_id>")
def show_book_details(book_id):
    """Shows details of one book."""

    book = crud.get_book_by_id(book_id)

    return render_template("book_detail.html", book=book)


@app.route('/api/<username>')
def get_user(username):

    user = crud.get_user_by_username(username)

    return jsonify(user)


@app.route('/api/book/<book_id>')
def get_one_book_by_id(book_id):

    book = crud.get_book_by_id(book_id)

    print('******************************')
    print('******************************')
    print(f'book_id={book_id}')
    print(f'book={book}')
    print('******************************')
    print('******************************')

    return jsonify(book.to_dict())


@app.route('/api/view_all/<int:shelf_id>')
def get_all_books_in_shelf(shelf_id):
    
    all_books = crud.get_books_by_shelf_id(shelf_id)
    all_books_dic = {}

    for book in all_books:
        all_books_dic[book.book_id] = book.to_dict()

    print('******************************')
    print('******************************')
    print(f'shelf_id={shelf_id}')
    print(f'all_books={all_books}')
    print(f'all_books_dic={all_books_dic}')
    print('******************************')
    print('******************************')

    return jsonify(all_books_dic)


if __name__ == "__main__":
    # with app.app_context():

    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)
