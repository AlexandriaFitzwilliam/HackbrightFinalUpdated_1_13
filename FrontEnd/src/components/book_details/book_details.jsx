import React from 'react';
import './book_details.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function BookCard(props) {
    const {
      // id, 
      title, 
      author, 
      // overview, 
      // publish_date, 
      // cover_pic,
      avg_rating,
      // num_ratings
                    } = props;
      return (
          <div className='bookcard'>
            <h1>this is inside bookcard</h1>
              
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
                  <Card.Link href="#">Book Details</Card.Link>
              </Card.Body>
              </Card>
  
          </div>
      )
  }

  export default BookCard