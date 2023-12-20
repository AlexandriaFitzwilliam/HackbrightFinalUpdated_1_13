"""CRUD operations"""

from model import db, User, Book, Shelf, BookShelf, Genre, BookGenre, Rating

def create_user(username, password):
    """Creates and returns a new user"""

    user = User(username = username, 
                password = password,
                profile_pic = "test",
                avg_rating = 0,
                num_rating = 0,
                about_me = "Here's a little thing about me...")
    
    return user


def get_users():
    """Return all users"""

    return User.query.all()


def get_user_by_id(user_id):
    """Returns a user based off an id"""

    return User.query.get(user_id)


def get_user_by_username(username):
    """Returns a user based off of email"""

    return User.query.filter(User.username == username).first()


def create_book(title, author, overview, publish_date, cover_pic):
    """Create and return a new book."""

    book = Book(
        title = title,
        author = author,
        overview = overview,
        publish_date = publish_date,
        cover_pic = cover_pic,
        avg_rating = 0,
        num_rating = 0
    )

    return book


def get_books():
    """Return all books"""

    return Book.query.all()


def get_book_by_id(book_id):
    """Return a book based off an id"""

    return Book.query.get(book_id)


def get_book_by_title(title):
    """Return books based off a title"""

    return Book.query.filter(Book.title == title)


def create_genre(name):
    """Create and return Genre."""

    genre = Genre(name = name)

    return genre

def get_genres():
    """Returns all genres."""

    return Genre.query.all()


def create_bookgenre(book_id, genre_id):
    """Create and return a BookGenre."""

    bookgenre = BookGenre(
        book_id = book_id,
        genre_id = genre_id
    )

    return bookgenre


def create_rating(score, book_id, user_id):
    """Create and return a Rating."""

    rating = Rating(
        score = score,
        book_id = book_id,
        user_id = user_id
    )

    return rating


def create_shelf(shelf_name, user_id):
    """Create and return a Shelf."""

    shelf = Shelf(
        shelf_name = shelf_name,
        user_id = user_id
    )

    return shelf


def create_bookshelf(shelf_id, book_id):
    """Create and return a BookShelf."""

    bookshelf = BookShelf(
        shelf_id = shelf_id,
        book_id = book_id
    )

    return bookshelf