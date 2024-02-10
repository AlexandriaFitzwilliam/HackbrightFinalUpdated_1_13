import React from 'react';
import './book_details.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function BookCard(props) {
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
          <div className='bookcard' id={`bookcard_id`}>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={cover_pic} />
              <Card.Body>
                  <Card.Title>
                  <Card.Link href={`/book/${id}`}>{title}</Card.Link>

                    </Card.Title>
                  <Card.Text>
                  {author}
                  </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                  <ListGroup.Item>Average Rating: {avg_rating}</ListGroup.Item>
              </ListGroup>
              </Card>
  
          </div>
      )
  }

  export default BookCard