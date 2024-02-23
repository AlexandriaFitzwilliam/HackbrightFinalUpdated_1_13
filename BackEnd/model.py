"""Models for book library and rating app."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    """A user."""

    __tablename__ = 'users'

    user_id = db.Column(db.Integer,
                        autoincrement=True,
                        primary_key=True)
    username = db.Column(db.String(30), unique=True)
    password = db.Column(db.String(20))
    profile_pic = db.Column(db.String(50))
    avg_rating = db.Column(db.Float)
    num_rating = db.Column(db.Integer)
    about_me = db.Column(db.String(150))

    # friends = db.relationship("friend", foreign_keys="[Friend.user_id]")
    ratings = db.relationship("Rating", back_populates="user")
    shelf = db.relationship("Shelf", back_populates="user")

    def __repr__(self):
        """Returns info about user."""

        return f'<User user_id={self.user_id} username={self.username}>'
    
    @classmethod
    def create(self, username, password):
        """Creates a new user"""

        user = User(username=username,
                    password=password,
                    profile_pic="test",
                    avg_rating=0,
                    num_rating=0,
                    about_me="Here's a little thing about me...")
        
        return user

    @classmethod
    def get_all(self):
        """Returns all users."""

        return User.query.all()
    
    @classmethod
    def get_by_id(self, user_id):
        """Returns a user by their user_id"""

        return User.query.filter(User.user_id == user_id).one()
    
    @classmethod
    def get_by_username(self, username):
        """Returns a user by their username."""

        return User.query.filter(User.username == username).first()
    
    
    @classmethod
    def get_by_param(self, param):
        """Returns a list of users by a partial match"""

        return User.query.filter(User.username.like(f'%{param}%')).all()
    
    def to_dict(self):
        """Returns info of each user as a dictionary"""

        shelf_ids = []
        for shelf in self.shelf:
            shelf_ids.append(shelf.shelf_id)

        return {
            'user_id':self.user_id,
            'username':self.username,
            'password':self.password,
            'profile_pic':self.profile_pic,
            'avg_rating':self.avg_rating,
            'num_rating':self.num_rating,
            'about_me':self.about_me,
            'shelf_ids':shelf_ids
        }
    
    def added_rating(self):
        """Increased count for num ratings and recalculated avg score"""

        total_nums = 0
        total_score = 0
        for rating in self.ratings:
            total_score += rating.score
            total_nums += 1

        self.avg_rating = total_score / total_nums
        self.num_rating = total_nums

        return


    


class Book(db.Model):
    """A Book"""

    __tablename__ = 'books'

    book_id = db.Column(db.Integer,
                        autoincrement=True,
                        primary_key=True)
    title = db.Column(db.String())
    author = db.Column(db.String())
    overview = db.Column(db.Text)
    publish_date = db.Column(db.String())
    cover_pic = db.Column(db.String)
    avg_rating = db.Column(db.Float)
    num_rating = db.Column(db.Integer)

    book_genre = db.relationship("BookGenre", back_populates="book")
    ratings = db.relationship("Rating", back_populates="book")
    bookshelf = db.relationship("BookShelf", back_populates="book")

    def __repr__(self):
        """Returns info about book."""

        return f'<Book book_id={self.book_id} title={self.title}>'
    
    @classmethod
    def create_book(self, title, author, overview, publish_date, cover_pic):
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
    
    @classmethod
    def get_all(self):
        """Returns all books"""

        return Book.query.all()
    
    @classmethod
    def get_by_id(self, book_id):
        """Returns a book by its id."""

        return Book.query.get(book_id)
    
    @classmethod
    def get_by_title(self, title):
        """Returns a book by its title."""
    
        return Book.query.filter(Book.title == title).first()
    
    
    @classmethod
    def get_by_param(self, param, param_type):
        """Returns list of books based off a LIKE"""

        param = param.title()

        if param_type == 'title':
            books = Book.query.filter(Book.title.like(f'%{param}%')).all()

        elif param_type == 'author':
            books = Book.query.filter(Book.author.like(f'%{param}%')).all()

        else:
            return
        
        return books
    
    
    # def add_rating(self):
    #     self.num_rating += 1
        
    #     ratings = Rating.query.filter(book_id==self.book_id).all()
    #     total_ratings = 0
    #     total_score = 0

    #     for rating in ratings:
    #         total_score += rating.score
    #         total_ratings += 1

    #     self.avg_rating = total_score / total_ratings

    #     return


    def to_dict(self):
        return { 'book_id' : self.book_id,
                'title' : self.title,
                'author' : self.author,
                'overview' : self.overview,
                'publish_date' : self.publish_date,
                'cover_pic' : self.cover_pic,
                'avg_rating' : self.avg_rating,
                'num_rating' : self.num_rating
        }
    

class Genre(db.Model):
    """A book genre"""

    __tablename__ = 'genres'

    genre_id = db.Column(db.Integer,
                        autoincrement=True,
                        primary_key=True)
    name = db.Column(db.String(15), unique=True)

    book_genre = db.relationship("BookGenre", back_populates="genre")

    def __repr__(self):
        """Returns info about genre."""

        return f'<Genre genre_id={self.genre_id} name={self.name}'
    

class BookGenre(db.Model):
    """A table to connect books to genres"""

    __tablename__ = "bookgenre"

    book_genre_id = db.Column(db.Integer,
                        autoincrement=True,
                        primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey("books.book_id"))
    genre_id = db.Column(db.Integer, db.ForeignKey("genres.genre_id"))

    book = db.relationship("Book", back_populates="book_genre")
    genre = db.relationship("Genre", back_populates="book_genre")

    def __repr__(self):
        return f'<BookGenre book_genre_id={self.book_genre_id} book_id={self.book_id} genre_id={self.genre_id}>'


class Rating(db.Model):
    """A rating."""

    __tablename__ = 'ratings'

    rating_id = db.Column(db.Integer,
                        autoincrement= True,
                        primary_key=True)
    score = db.Column(db.Integer)     #1-5
    book_id = db.Column(db.Integer, db.ForeignKey("books.book_id"))
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id")) 
    details = db.Column(db.Text)

    book = db.relationship("Book", back_populates="ratings")
    user = db.relationship("User", back_populates="ratings")

    def __repr__(self):
        return f'<Rating rating_id={self.rating_id} book_id={self.book_id}>'
    
    @classmethod
    def create(self, user_id, book_id, score, details=None):
        """Creates and returns a new rating"""

        rating = Rating(
            user_id=user_id,
            book_id=book_id,
            score=float(score),
            details=details
        )

        return rating
    
    @classmethod
    def get_by_book_id(self, book_id):
        """Returns all Ratings based off a given book_id"""

        return Rating.query.filter(Rating.book_id == book_id).all()
    
    @classmethod
    def get_by_user_id(self, user_id):
        """Returns a Ratings based off a given user_id"""

        return Rating.query.filter(Rating.user_id == user_id).all()
    
    @classmethod
    def get_by_user_and_book(self, user_id, book_id):
        """Returns one rating based off user and book combo"""

        return Rating.query.filter(Rating.user_id == user_id, Rating.book_id == book_id).first()
    
    @classmethod
    def calculate_avg_and_num(self, id, id_type):
        """"Caclualtes the avg and num ratings for a user or book"""

        if id_type == 'book':
            ratings = Rating.query.filter(Rating.book_id == id).all()
            book_user = Book.query.filter(Book.book_id == id).one()
        elif id_type == 'user':
            ratings = Rating.query.filter(Rating.user_id == id).all()
            book_user = User.query.filter(User.user_id == id).one()
        else:
            return
        
        total_score = 0
        total_num = 0

        for rating in ratings:
            total_score += rating.score
            total_num += 1

        avg_rating = total_score / total_num

        avg_rating = round(avg_rating, 3)

        book_user.avg_rating = avg_rating
        book_user.num_rating = total_num

        return


    
    def to_dict(self):
        return { 'rating_id' : self.rating_id,
                'score' : self.score,
                'book_id' : self.book_id,
                'user_id' : self.user_id,
                'username': self.user.username,
                'book_title':self.book.title,
                'details' : self.details
        }



class Shelf(db.Model):
    """A shelf users can store a collection of books on."""

    __tablename__ = "shelfs"

    shelf_id = db.Column(db.Integer,
                        autoincrement= True,
                        primary_key=True)
    shelf_name = db.Column(db.String(20))
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id")) 

    bookshelf = db.relationship("BookShelf", back_populates="shelf")
    user = db.relationship("User", back_populates="shelf")

    @classmethod
    def create(self, user_id, shelf_name):
        """Creates and returns a shelf"""

        shelf = Shelf(user_id=user_id, shelf_name=shelf_name)

        return shelf
    
    @classmethod
    def get_by_user_id(self, user_id):
        """Returns a list of shelves by user_id"""

        shelfs = Shelf.query.filter(Shelf.user_id == user_id).all()

        return shelfs

    def __repr__(self):
        return f'<Shelf shelf_id={self.shelf_id} user_id={self.user_id}>'
    
    def to_dict(self):
        return { 'shelf_id' : self.shelf_id,
                'name' : self.shelf_name,
                'user_id' : self.user_id,
        }
    

class BookShelf(db.Model):
    """A shelf with the collection of books connection"""

    __tablename__ = "bookshelfs"

    bookshelf_id = db.Column(db.Integer,
                        autoincrement= True,
                        primary_key=True)
    shelf_id = db.Column(db.Integer, db.ForeignKey("shelfs.shelf_id")) 
    book_id = db.Column(db.Integer, db.ForeignKey("books.book_id"))

    shelf = db.relationship("Shelf", back_populates="bookshelf")
    book = db.relationship("Book", back_populates="bookshelf")

    @classmethod
    def create(self, book_id, shelf_id):

        bookshelf = BookShelf(book_id=book_id, shelf_id=shelf_id)

        return bookshelf
    
    @classmethod
    def get_all(self):

        return BookShelf.query.all()
    
    @classmethod
    def get(self, book_id, shelf_id):

        return BookShelf.query.filter(BookShelf.book_id == book_id, BookShelf.shelf_id==shelf_id).first()

    @classmethod
    def get_by_shelf_id(self, shelf_id):
        
        books = []

        bookshelves = BookShelf.query.filter(BookShelf.shelf_id == shelf_id).all()

        for bookshelf in bookshelves:
            book = bookshelf.book
            books.append(book)

        return books
    
    def to_dict(self):
        return { 'bookshelf_id' : self.bookshelf_id,
                'shelf_id' : self.shelf_id,
                'book_id' : self.book_id,
        }

# class Friend(db.Model):
#     """Two users who are connected as friends."""

#     __tablename__ = 'friends'

#     friend_id = db.Column(db.Integer,
#                         autoincrement= True,
#                         primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
#     friend_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))

#     user = db.relationship("User", back_populates="user")
#     friend = db.relationship("User", back_populates="friend")

#     def __repr__(self):
#         return f'<Friend friend_id={self.friend_id} friend_1={self.user} friend_2={self.friend_id}>'


def connect_to_db(flask_app, db_uri="postgresql:///ratings", echo=True):
    flask_app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
    flask_app.config["SQLALCHEMY_ECHO"] = echo
    flask_app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.app = flask_app
    db.init_app(flask_app)

    print("Connected to the db!")


if __name__ == "__main__":
    from server import app

    connect_to_db(app)