import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function BookCardShelf(props) {
    const {
      id, 
      title, 
      author, 
      // overview, 
      // publish_date, 
      cover_pic,
      avg_rating,
      // num_ratings
                    } = props;
      return (
          <div className='box bookcard' id={`bookcard_id`}>
            <div className='body'>
                <img className='imgContainer' src={cover_pic} />
                <div class="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <a className='text-white fs-5' href={`/book/${id}`}>Average Rating:<br></br>{avg_rating} Stars</a>
                    </div>
                </div>
              </div>
          </div>
      )
  }

  export default BookCardShelf