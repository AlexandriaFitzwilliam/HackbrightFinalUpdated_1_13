import React from 'react';
import './shelf_details.css';
import BookCard from '../book_details/book_details'

const ShelfDetails = (props) => {
    const {user_id} = props;
    const [books, setBooks] = React.useState({});
    const bookCards = [];

  React.useEffect(() => {
    fetch(`/api/view_all/${user_id}`)
      .then((response) => response.json())
      .then((result) => setBooks(result));
  }, [user_id]);

  for (const book of Object.values(books)) {
        const bookCard = (
          <BookCard
        //   id={book.book_id}
          title={book.title}
          author={book.author}
        //   overview={book.overview}
        //   publish_date={book.publish_date}
        //   cover_pic={book.cover_pic}
          avg_rating={book.avg_rating}
          // num_ratings={book.num_ratings}
          />
        );
        bookCards.push(bookCard)
      }



    return (
        <div>
            <h1>Shelf Name Goes Here</h1>
            <span></span>
            {bookCards}
            
        </div>
    )
}

export default ShelfDetails


// function BookCard(props) {
//   const {
//     // id, 
//     title, 
//     author, 
//     // overview, 
//     // publish_date, 
//     // cover_pic,
//     avg_rating,
//     // num_ratings
//                   } = props;
//     return (
//         <div className='bookcard'>
            
//             <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//             <Card.Body>
//                 <Card.Title>{title}</Card.Title>
//                 <Card.Text>
//                 {author}
//                 </Card.Text>
//             </Card.Body>
//             <ListGroup className="list-group-flush">
//                 <ListGroup.Item>Average Rating: {avg_rating}</ListGroup.Item>
//                 {/* <ListGroup.Item>Number of Ratings: {num_ratings}</ListGroup.Item> */}
//             </ListGroup>
//             <Card.Body>
//                 <Card.Link href="#">Book Details</Card.Link>
//             </Card.Body>
//             </Card>

//         </div>
//     )
// }