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


@app.route("/test_profile")
def show_user():
    """Shows the User's shelves"""

    user = crud.get_user_by_id(1)

    print()
    print("************************")
    print(f'user.username={user.username}')
    print(f'user.shelf={user.shelf}')
    print("************************")
    print()

    return render_template("user_page.html", user=user)





@app.route('/api/<username>')
def get_user(username):

    user = crud.get_user_by_username(username)

    return jsonify(user)


if __name__ == "__main__":
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)
