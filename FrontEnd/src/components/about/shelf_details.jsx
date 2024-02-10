import React from 'react';
import './shelf_details.css';
import BookCard from '../book_details/book_details'

const ShelfDetails = (props) => {
    const {shelf_id} = props;
    const [books, setBooks] = React.useState({});
    const bookCards = [];


  React.useEffect(() => {
    fetch(`/api/view_all/${shelf_id}`)
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        console.log(`result=${result}`)
        setBooks(result)
      });
  }, [shelf_id]);
  // console.log(`books=${books}`)


  for (const book of Object.values(books)) {
        const bookCard = (
          <BookCard
          id={book.book_id}
          title={book.title}
          author={book.author}
        //   overview={book.overview}
        //   publish_date={book.publish_date}
          cover_pic={book.cover_pic}
          avg_rating={book.avg_rating}
          // num_ratings={book.num_ratings}
          />
        );
        bookCards.push(bookCard)
      }

      // console.log(`bookCards=${bookCards}`)

    return (
        <div className='shelfcard' id={`shelfcard_${shelf_id}`}>
          {bookCards}
        </div>
    )
}

export default ShelfDetails
