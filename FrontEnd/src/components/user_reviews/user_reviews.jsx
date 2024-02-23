import React from 'react';
import Card from 'react-bootstrap/Card';

const UserReviews = (props) => {
    const {user_id} = props
    const [ratings, setRatings] = React.useState({})
    const ratingCards = []

    React.useEffect(() => {
        fetch(`/api/user_ratings/${user_id}`)
          .then((response) => response.json())
          .then((result) => setRatings(result));
      }, [user_id]);

      for (const rating of Object.values(ratings)) {
        const ratingCard = (
            <RatingCard
            score={rating.score}
            book_title={rating.book_title}
            id={rating.book_id}
            details={rating.details}
            />
        );
        ratingCards.unshift(ratingCard)
      }

      
    return (
        <div className='border-double green-background'>
            <h2 className='col review-header'>Recent Reviews</h2>
            <span className='row'>{ratingCards}</span>

        </div>
    )
}

export default UserReviews

function RatingCard(props) {
    const {score, book_title, id, details} = props;


    return (
        <div className='col ratingcard'>
            <Card className="ratingcard-details" border="success" style={{ width: '18rem' }}>
                <Card.Header>
                <Card.Link className='book_title' href={`/book/${id}`}>{book_title}</Card.Link>
                    
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