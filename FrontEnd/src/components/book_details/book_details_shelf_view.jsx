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
                        <a className='text-white fs-5' href={`/book/${id}`}>{title}</a>
                        <p className='fs-6 text-white'>{author}</p>
                    </div>
                </div>
              {/* <Card style={{ width: '12rem' }}>
              <Card.Img variant="top" src={cover_pic} />
              <Card.Body>
                  <Card.Title>
                  <Card.Link href={`/book/${id}`}>{title}</Card.Link>
                    </Card.Title>
                  <Card.Text>
                  {author}
                  </Card.Text>
              </Card.Body>
              </Card> */}
              </div>
          </div>
      )
  }

  export default BookCardShelf