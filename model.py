"""Models for book library and rating app."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    """A user."""

    __tablename__ = 'users'

    user_id = db.Column(db.Integer,
                        autoincrement=True,
                        primary_key=True)
    username = db.Column(db.String(15), unique=True)
    password = db.Column(db.String(20))
    profile_pic = db.Column(db.String(50))
    avg_rating = db.Column(db.Float)
    num_rating = db.Column(db.Integer)
    about_me = db.Column(db.String(150))

    #friends = db.relationship("Friend", back_populates='user')
    # friends =db.relationship("Friend", back_populates='friend_1')


    def __repr__(self):
        """Returns info about user."""

        return f'<User user_id={self.user_id} username={self.username}>'
    


class Book(db.Model):
    """A Book"""

    __tablename__ = 'books'

    book_id = db.Column(db.Integer,
                        autoincrement=True,
                        primary_key=True)
    title = db.Column(db.String(50))
    author = db.Column(db.String(50))
    overview = db.Column(db.Text)
    publish_date = db.Column(db.DateTime)
    cover_pic = db.Column(db.String)
    avg_rating = db.Column(db.Float)
    num_rating = db.Column(db.Integer)


    def __repr__(self):
        """Returns info about book."""

        return f'<Book book_id={self.book_id} title={self.title}>'
    

class Genre(db.Model):
    """A book genre"""

    __tablename__ = 'genres'

    book_id = db.Column(db.Integer,
                        autoincrement=True,
                        primary_key=True)


# class Friend(db.Model):
#     """Two users who are connected as friends."""

#     __tablename__ = 'friends'

#     friend_id = db.Column(db.Integer,
#                         autoincrement= True,
#                         primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
#     friend_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))

#     friend_1 = db.relationship("User", back_populates="friends")
#     friend_2 = db.relationship("User", back_populates="friends")

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