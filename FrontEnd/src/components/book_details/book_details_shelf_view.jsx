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
          <div className='col bookcard' id={`bookcard_id`}>
              <Card style={{ width: '12rem' }}>
              <Card.Img variant="top" src={cover_pic} />
              <Card.Body>
                  <Card.Title>
                  <Card.Link href={`/book/${id}`}>{title}</Card.Link>
                    </Card.Title>
                  <Card.Text>
                  {author}
                  </Card.Text>
              </Card.Body>
              </Card>
  
          </div>
      )
  }

  export default BookCardShelf