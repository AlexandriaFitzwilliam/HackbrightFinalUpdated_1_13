"""Script to seed database."""

import os
import json
from random import choice, randint
from datetime import datetime
from faker import Faker

import crud
import model
import server

fake = Faker()

#drop old database and create new one
os.system('dropdb ratings')
os.system('createdb ratings')

#connect to the database and call db.create_all
model.connect_to_db(server.app)
model.db.create_all()

#creates 10 books and stores in db
books_in_db = []

for x in range(10):
    date = fake.date()
    #YYYY-MM-DD
    format = '%Y-%m-%d'
    date = datetime.strptime(date, format)

    book = crud.create_book(
        title = fake.sentence(nb_words=4),
        author = fake.name(),
        overview = fake.paragraphs(nb=4),
        publish_date = date,
        cover_pic="image_link_here"
    )
    books_in_db.append(book)

model.db.session.add_all(books_in_db)
model.db.session.commit()

#creates 5 genres and add to db
genres_in_db = []
genres = ['fantasy', 'sci-fi', 'romance', 'fiction', 'ya']

for genre in genres:
    genre_instance = crud.create_genre(name=genre)
    genres_in_db.append(genre_instance)

model.db.session.add_all(genres_in_db)
model.db.session.commit()


#gives every book in db 2 genres
#not smart enough to see if it is the same genre or not
bookgenres_in_db = []
for x in range(2):
    for book in books_in_db:
        random_genre = choice(genres_in_db)
        bookgenre = crud.create_bookgenre(
            book_id=book.book_id,
            genre_id=random_genre.genre_id
        )
        bookgenres_in_db.append(bookgenre)

model.db.session.add_all(bookgenres_in_db)
model.db.session.commit()


ratings_in_db = []
shelfs_in_db = []

#create 10 users
users_in_db = []
for x in range(10):
    user = crud.create_user(
        username = fake.name(),
        password = "test"
    )
    model.db.session.add(user)
    model.db.session.commit()

    #create first shelf "wish list"
    first_shelf = crud.create_shelf(
        shelf_name="Wish List",
        user_id=user.user_id
    )
    shelfs_in_db.append(first_shelf)

    second_shelf = crud.create_shelf(
        shelf_name = "Test2 Shelf",
        user_id=user.user_id
    )
    shelfs_in_db.append(second_shelf)

    #create 5 random reviews for each user
    for r in range(5):
        score = randint(1,5)
        random_book = choice(books_in_db)

        rating = crud.create_rating(
            score = score,
            book_id = random_book.book_id, 
            user_id = user.user_id
        )
        ratings_in_db.append(rating)

model.db.session.add_all(ratings_in_db)
model.db.session.add_all(shelfs_in_db)
model.db.session.commit()


#add avg rating
for book in books_in_db:
    new_avg = 0
    for rating in book.ratings:
        new_avg += rating.score
    book.avg_rating = new_avg/book.num_rating
    

#add two books to every wishlist
bookshelf_in_db = []
for shelf in shelfs_in_db:
    
    for r in range(2):
        random_book = choice(books_in_db)

        bookshelf = crud.create_bookshelf(
            shelf_id=shelf.shelf_id,
            book_id=random_book.book_id
        )
        bookshelf_in_db.append(bookshelf)
        

model.db.session.add_all(bookshelf_in_db)
model.db.session.commit()
