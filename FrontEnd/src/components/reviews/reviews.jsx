import React from 'react';
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
            user_id={rating.user_id}
            />
        );
        ratingCards.unshift(ratingCard)
      }


    return (
        <div className='border-double buffer-top green-background justify-content-center' id={`book_ratings_${book_id}`}>
            <h2 className='review-header'>Reviews</h2>
            <span className='row'>{ratingCards}</span>

        </div>
    )
}

export default Reviews

function RatingCard(props) {
    const {score, username, id, details, user_id} = props;


    return (
        <div className='col-3 ratingcard' id={`ratingcard_${id}`}>
            <Card className="ratingcard-details" style={{ width: '18rem' }}>
                <Card.Header>
                <Card.Link className='ratingcard-title' href={`/users/user/${user_id}`}>{username}</Card.Link>
                    </Card.Header>
                <Card.Body>
                <Card.Title className='ratingcard-score'>{score} Stars</Card.Title>
                <Card.Text className='ratingcard-text'>
                    {details}
                 </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
    )
}