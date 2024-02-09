import React from 'react';
import './book_details.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


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
          <div className='bookcard'>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={cover_pic} />
              <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                  {author}
                  </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                  <ListGroup.Item>Average Rating: {avg_rating}</ListGroup.Item>
                  {/* <ListGroup.Item>Number of Ratings: {num_ratings}</ListGroup.Item> */}
              </ListGroup>
              <Card.Body>
                  <Card.Link href={`/book/${id}`}>Book Details</Card.Link>
                  {/* <Button href='/book' id={id}>Book Details</Button> */}
              </Card.Body>
              </Card>
  
          </div>
      )
  }

  export default BookCard