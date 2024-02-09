from random import choice, randint
from model import User, Book, Shelf, Rating, BookShelf, db, connect_to_db
import model
from flask import Flask
from server import app

# app = Flask(__name__)
# app.secret_key = "dev"
connect_to_db(app)
all_users = User.get_all()
books_in_db = Book.get_all()

for user in all_users:
    first_shelf = Shelf.create(
        shelf_name='Wish List',
        user_id = user.user_id
    )
    model.db.session.add(first_shelf)
    model.db.session.commit()

    rating_for_user = []
    for x in range(5):
        book = choice(books_in_db)

        bookshelf = BookShelf.create(
            book_id=book.book_id,
            shelf_id=first_shelf.shelf_id
        )
        model.db.session.add(bookshelf)
        model.db.session.commit()

        rating = Rating.create(
            book_id=book.book_id,
            score=randint(1,5),
            user_id=user.user_id
        )
        model.db.session.add(rating)
        model.db.session.commit()
        Rating.calculate_avg_and_num(id=book.book_id, id_type='book')
        model.db.session.commit()

    Rating.calculate_avg_and_num(id=user.user_id, id_type='user')
    model.db.session.commit()
    


# if __name__ == "__main__":
#     # with app.app_context():

#     # app = Flask(__name__)
#     # app.secret_key = "dev"

#     connect_to_db(app)
#     app.run(host="0.0.0.0", debug=True)