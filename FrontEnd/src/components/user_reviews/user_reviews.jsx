import React from 'react';
import './user_reviews.css';
import Card from 'react-bootstrap/Card';

const UserReviews = () => {
    const [ratings, setRatings] = React.useState({})
    const ratingCards = []

    React.useEffect(() => {
        fetch(`/api/user_ratings/1`)
          .then((response) => response.json())
          .then((result) => setRatings(result));
      }, []);

      for (const rating of Object.values(ratings)) {
        const ratingCard = (
            <RatingCard
            score={rating.score}
            book_title={rating.book_title}
            />
        );
        ratingCards.push(ratingCard)
      }


    return (
        <div>
            <h1>Ratings go here</h1>
            <span>{ratingCards}</span>

        </div>
    )
}

export default UserReviews

function RatingCard(props) {
    const {score, book_title} = props;


    return (
        <div className='ratingcard'>
            <Card border="success" style={{ width: '18rem' }}>
                <Card.Header>{book_title}</Card.Header>
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