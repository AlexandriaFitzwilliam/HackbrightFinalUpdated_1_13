import React from 'react';
// import BookCard from '../book_details/book_details'
import BookCardShelf from '../book_details/book_details_shelf_view';

const ShelfDetails = (props) => {
    const {shelf_id} = props;
    const [books, setBooks] = React.useState({});
    const [beg, setBeg] = React.useState(0);
    const [end, setEnd] = React.useState(5);
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
          <BookCardShelf
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
        bookCards.unshift(bookCard)
      }

  // function handleRightClick() {
  //   setBeg(beg+=1)
  //   setEnd(end+=1)
  // }

  // for (const completeBookCard of bookCards) {

  // }

      // console.log(`bookCards=${bookCards}`)

    return (
        <div className='container d-flex align-items-center justify-content-center flex-wrap border-double' id={`shelfcard_${shelf_id}`}>
          {/* <div class='row'>
            {bookCards.slice(beg,end)}
          </div> */}
          <div className='row overflow-auto shelf-scroll'>
            {bookCards}
          </div>
        </div>
    )
}

export default ShelfDetails
