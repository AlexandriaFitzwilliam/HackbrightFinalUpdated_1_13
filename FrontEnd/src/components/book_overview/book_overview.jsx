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
          <div className='container-fluid bookoverview'>
            <div className='border-double'>
                <div className='row'>
                    <span className='col'></span>
                    <Image className='col-2' src={cover_pic} />
                    <div className='col-5'>
                        <h1 className='review-header author-header'>{title}</h1>
                        <h3 className='author-header'>{author}</h3>
                        <Link className='button-52' to={`/add_book/${book_id}`}>Add to Shelf</Link>
                    </div>
                    <span className='col'></span>
                </div>
                <div className='author-header'>
                    <h5 >Average Rating: {avg_rating}</h5>
                    <h5>Number of Ratings: {num_rating}</h5>
                    <h5>Publish Date: {publish_date}</h5>
                </div>
                <h5 className='shelf-name d-inline-flex p-1'>Book Summary</h5>
                <p className='col border-double green-background pink-text'>{overview}</p>
            </div>
                <br></br>
                <Link className='button-52 author-header' to={`/create_rating/${book_id}`} title={title}>Add Rating</Link>
                <br></br>
                <Reviews book_id={book_id}/>
          </div>
      )
  }

  export default BookOverview