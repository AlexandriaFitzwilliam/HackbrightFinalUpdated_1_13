import React from 'react';
import './reviews.css';
import Card from 'react-bootstrap/Card';

const Reviews = (props) => {
    const [ratings, setRatings] = React.useState({})
    const ratingCards = []
    const {book_id} = props

    // console.log(`book_id=${book_id}`)

    React.useEffect(() => {
        fetch(`/api/book_ratings/${book_id}`)
          .then((response) => response.json())
          .then((result) => setRatings(result));
      }, [book_id]);

      for (const rating of Object.values(ratings)) {
        const ratingCard = (
            <RatingCard
            score={rating.score}
            username={rating.username}
            id={rating.rating_id}
            details={rating.details}
            />
        );
        ratingCards.unshift(ratingCard)
      }


    return (
        <div className='book_ratings' id={`book_ratings_${book_id}`}>
            <h2>Reviews</h2>
            <span>{ratingCards}</span>

        </div>
    )
}

export default Reviews

function RatingCard(props) {
    const {score, username, id, details} = props;


    return (
        <div className='ratingcard' id={`ratingcard_${id}`}>
            <Card border="success" style={{ width: '18rem' }}>
                <Card.Header>
                <Card.Link href={`/users/user/${id}`}>{username}</Card.Link>
                    </Card.Header>
                <Card.Body>
                <Card.Title>{score} Stars</Card.Title>
                <Card.Text>
                    {details}
                 </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
    )
}