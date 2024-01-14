import React from 'react';
import './book_overview.css';


function BookOverview(props) {
    const [bookDetails, setBookDetails] = React.useState({})

    React.useEffect(() => {
        fetch(`/api/book/5`)
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
              
              <h1>{title}</h1>
              <h3>{author}</h3>
              <h5>{avg_rating}</h5>
              <h5>{num_rating}</h5>
              <h5>{publish_date}</h5>
              <p>{overview}</p>
  
          </div>
      )
  }

  export default BookOverview