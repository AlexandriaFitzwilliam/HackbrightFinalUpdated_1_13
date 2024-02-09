import React from 'react';
import './reviews.css';
import Card from 'react-bootstrap/Card';

const Reviews = (props) => {
    const [ratings, setRatings] = React.useState({})
    const ratingCards = []
    const {book_id} = props

    React.useEffect(() => {
        fetch(`/api/book_ratings/${book_id}`)
          .then((response) => response.json())
          .then((result) => setRatings(result));
      }, []);

      for (const rating of Object.values(ratings)) {
        const ratingCard = (
            <RatingCard
            score={rating.score}
            username={rating.username}
            />
        );
        ratingCards.push(ratingCard)
      }


    return (
        <div>
            <h1>Book Ratings go here</h1>
            <span>{ratingCards}</span>

        </div>
    )
}

export default Reviews

function RatingCard(props) {
    const {score, username} = props;


    return (
        <div className='ratingcard'>
            <Card border="success" style={{ width: '18rem' }}>
                <Card.Header>{username}</Card.Header>
                <Card.Body>
                <Card.Title>{score} Stars</Card.Title>
                {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                // </Card.Text>  uncomment this out if want to add words to reviews*/}
                </Card.Body>
            </Card>
            <br />
        </div>
    )
}