import React from 'react';
import Reviews from '../reviews/reviews'
import {Link, useParams} from "react-router-dom";
import Image from 'react-bootstrap/Image';


function BookOverview() {
    const [bookDetails, setBookDetails] = React.useState({})
    let { id } = useParams();

    React.useEffect(() => {
        fetch(`/api/book/${id}`)
          .then((response) => response.json())
          .then((result) => setBookDetails(result));
      }, []);

    const [
        author,
        avg_rating,
        book_id,
        cover_pic,
        num_rating,
        overview,
        publish_date,
        title
            ] = Object.values(bookDetails)


      return (
          <div className='bookoverview'>
              
              <Image src={cover_pic} thumbnail />
              {/* <h4>{cover_pic}</h4> */}
              <h1>{title}</h1>
              <h3>{author}</h3>
              <Link to={`/add_book/${book_id}`}>Add to Shelf</Link>
              <h5>Average Rating: {avg_rating}</h5>
              <h5>Number of Ratings: {num_rating}</h5>
              <h5>Publish Date: {publish_date}</h5>
              <h5>Book Summary</h5>
              <p>{overview}</p>
              <h5>The below reviews are done through reviews page</h5>
              <Link to={`/create_rating/${book_id}`} title={title}>Add Rating</Link>
              <Reviews book_id={book_id}/>
  
          </div>
      )
  }

  export default BookOverview