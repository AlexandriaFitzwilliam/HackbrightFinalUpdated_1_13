"""Server for movie ratings app."""

from flask import (Flask, render_template, request, flash, session,
                   redirect, jsonify)
from model import db ,connect_to_db, Rating, User, Book, Shelf, BookShelf
import crud
from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined


@app.route('/')
def homepage():
    """View homepage."""

    return render_template('base.html')


@app.route('/api/user/<username>')
def get_user_with_username(username):
    """Gets a user object from the db and returns"""

    user = User.get_by_username(username)

    if user == None:
        return None
    else:
        return jsonify(user.to_dict())


@app.route('/api/create_account', methods=["POST"])
def create_account():
    """Adds a new user to db."""

    new_username=request.json.get("newUsername")
    new_password=request.json.get("newPassword")
    success=False

    if User.get_by_username(new_username)==None:
        new_user = User.create(new_username,new_password)
        db.session.add(new_user)
        db.session.commit()
        success=True

    return {
        "success":success
    }


@app.route('/api/login', methods=["POST"])
def attempt_login():
    """Sees if login matches db."""
    username=request.json.get("username")
    password=request.json.get("password")

    user = User.get_by_username(username)

    if user == None or password != user.password:
        success = False
    elif password == user.password:
        success = True
    else:
        print("Something is wrong in attempt_login")
        success = False

    return {
        "success":success
    }


@app.route('/api/userid/<int:user_id>')
def get_user(user_id):

    user = User.get_by_id(user_id)
    return jsonify(user.to_dict())


@app.route('/api/book/<int:book_id>')
def get_one_book_by_id(book_id):

    book = Book.get_by_id(book_id)

    return jsonify(book.to_dict())


@app.route('/api/view_all/<int:shelf_id>')
def get_all_books_in_shelf(shelf_id):
    
    all_books = Book.get_by_shelf_id(shelf_id=shelf_id)
    all_books_dic = {}

    for book in all_books:
        all_books_dic[book.book_id] = book.to_dict()

    print(all_books_dic)
    print(jsonify(all_books_dic))

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


@app.route('/api/all_shelfs/<int:user_id>')
def get_all_shelfs(user_id):

    all_shelfs = Shelf.get_by_user_id(user_id)
    all_shelfs_dict = {}

    for shelf in all_shelfs:
        all_shelfs_dict[shelf.shelf_id] = shelf.to_dict()

    return jsonify(all_shelfs_dict)


@app.route('/api/user_ratings/<int:user_id>')
def get_all_ratings_for_user(user_id):

    all_ratings = Rating.get_by_user_id(user_id)
    all_ratings_dict = {}

    for rating in all_ratings:
        all_ratings_dict[rating.rating_id] = rating.to_dict()

    return jsonify(all_ratings_dict)


@app.route('/api/create_bookshelf', methods=["POST"])
def attempt_create_bookshelf():
    shelf_id = request.json.get("new_shelf")
    book_id = request.json.get("book_id")
    success = False

    bookshelf = BookShelf.get(book_id=book_id, shelf_id=shelf_id)
    print()
    print('*************************')
    print(f'shelf_id={shelf_id}')
    print(f'book_id={book_id}')
    print()

    if bookshelf:
        success = False
    else:
        new_bookshelf = BookShelf.create(shelf_id=shelf_id, book_id=book_id)
        db.session.add(new_bookshelf)
        db.session.commit()
        success = True
        print("*************")
        print(f'new-bookshelf = {new_bookshelf}')

    return {
            "success":success
        }


@app.route('/api/create_rating', methods=["POST"])
def attempt_create_rating():
    """Creates a rating if rating combo does not exist"""
    user_id=request.json.get("user_id")
    book_id=request.json.get("book")
    score=request.json.get("score")

    rating = Rating.get_by_user_and_book(user_id=user_id, book_id=book_id)
    user = User.get_by_id(user_id=user_id)

    print("*****************")
    print(rating)
    print("***********")

    if rating:
        success=False
    else:
        new_rating = Rating.create(user_id=user_id, book_id=book_id,score=score)
        if new_rating:
            db.session.add(new_rating)
            db.session.commit()
            user.added_rating()
            success=True
            
        else:
            success=False

    return {
        "success":success
    }

@app.route('/api/create_shelf', methods=["POST"])
def attempt_create_shelf():
    """Checks if book is already on shelf, if not adds it."""
    user_id=request.json.get("user_id")
    shelf_name=request.json.get("shelfName")

    print("******************")
    print(shelf_name)
    print("**************")

    shelf = Shelf.create(user_id=user_id, shelf_name=shelf_name)

    if shelf:
        db.session.add(shelf)
        db.session.commit()
        success=True
    else:
        success=False
        

    return {
        "success":success
    }

@app.route('/api/search_title', methods=["POST"])
def search_books_title():
    """Looks in db for book with that title"""

    title=request.json.get("partial")
    title=title.lower()
    success=False

    return {
        "success":success
    }


if __name__ == "__main__":
    # with app.app_context():

    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)
