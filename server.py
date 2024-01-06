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


if __name__ == "__main__":
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)
