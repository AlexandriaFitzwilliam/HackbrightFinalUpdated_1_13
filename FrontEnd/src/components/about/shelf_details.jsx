import React from 'react';
import BookCard from '../book_details/book_details'

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

  // function handleRightClick() {
  //   setBeg(beg+=1)
  //   setEnd(end+=1)
  // }

  // for (const completeBookCard of bookCards) {

  // }

      // console.log(`bookCards=${bookCards}`)

    return (
        <div class='container' className='shelfcard' id={`shelfcard_${shelf_id}`}>
          {/* <div class='row'>
            {bookCards.slice(beg,end)}
          </div> */}
          <div className='row'>
            {bookCards}
          </div>
        </div>
    )
}

export default ShelfDetails
