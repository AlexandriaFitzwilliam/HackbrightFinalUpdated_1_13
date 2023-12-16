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

    def __repr__(self):
        """Returns info about user."""

        return f'<User user_id={self.user_id} username={self.username}>'
    


def Book(db.Model):
    """A Book"""

    __tablename__ = 'users'

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